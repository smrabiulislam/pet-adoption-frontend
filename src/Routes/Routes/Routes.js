import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../../component/Signin/Signin";
import Signup from "../../component/Signup/Signup";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
