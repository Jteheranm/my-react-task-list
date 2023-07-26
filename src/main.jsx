import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import HomePage from "./pages/Homepage";
import TasksPage from "./pages/TasksPage";
import SobreNosotrosPage from "./pages/SobreNosotrosPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./assets/styles/global.css";
import "./assets/styles/normalize.css";
import "./assets/styles/notFound.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/about",
    element: <SobreNosotrosPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

// Chakra UI configuration
const colors = {
  white: {
    100: '#FFF',
  },
  black: {
    100: '#000',
  },
  primaryColor: {
    100: '#0078ff',
  },
  secondaryColor: {
    100: '#b54eb3',
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
