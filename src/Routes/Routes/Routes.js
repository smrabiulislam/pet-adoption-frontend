import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../../component/Signin/Signin";
import Signup from "../../component/Signup/Signup";
import Main from "../../Layout/Main";
import Header from "../../Pages/Shared/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/signin",
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
