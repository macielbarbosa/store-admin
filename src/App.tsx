import { RouterProvider } from "react-router";
import { Theme } from "@radix-ui/themes";

import { router } from "./router";

function App() {
  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
