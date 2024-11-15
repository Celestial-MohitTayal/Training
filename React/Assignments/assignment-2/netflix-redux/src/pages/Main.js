import React from "react";
import Login from "./Login";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <div>
      {/* <Login />
      <Browse /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Main;
