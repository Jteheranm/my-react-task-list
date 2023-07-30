import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import HomePage from "./pages/Homepage";

import "./assets/styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

// Chakra UI configuration
const colors = {
  colors: {
    brand: {
      100: "#fff",
    },
  },
}
const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
