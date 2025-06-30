import axios from "axios";

import { delay } from "@/utils/delay";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  async (config) => {
    await delay(500);
    return config;
  },
  (error) => Promise.reject(error)
);
