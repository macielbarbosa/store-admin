import { RouterProvider } from "react-router";
import { Theme } from "@radix-ui/themes";
import { SnackbarProvider } from "notistack";

import { router } from "./router";

function App() {
  return (
    <Theme>
      <SnackbarProvider variant="success">
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Theme>
  );
}

export default App;
