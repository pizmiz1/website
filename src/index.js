import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeScreen from "./screens/Home";
import ProjectsScreen from "./screens/Projects";
import ResumeScreen from "./screens/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/projects",
        element: <ProjectsScreen />,
      },
      {
        path: "/resume",
        element: <ResumeScreen />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
