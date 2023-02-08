import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../../component/Signin/Signin";
import Signup from "../../component/Signup/Signup";
import Main from "../../Layout/Main";
import Homepage from "../../Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path: "/",

        element: <Homepage></Homepage>,
      },
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
