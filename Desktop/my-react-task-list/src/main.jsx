import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
