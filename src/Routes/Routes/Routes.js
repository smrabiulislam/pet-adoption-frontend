import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../../component/Signin/Signin";
import Signup from "../../component/Signup/Signup";
import Main from "../../Layout/Main";

import Homepage from "../../Pages/Homepage/Homepage";
import About from "../../Pages/Profile/About/About";
import AddPet from "../../Pages/Profile/AddPet/AddPet";
import MyPosts from "../../Pages/Profile/MyPosts/MyPosts";
import Profile from "../../Pages/Profile/Profile";
import Settings from "../../Pages/Profile/Settings/Settings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",

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

      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/add-pet',
        element: <AddPet></AddPet>
      },
      {
        path: '/my-posts',
        element: <MyPosts></MyPosts>
      },
      {
        path: '/about',
        element: <About></About>
      }
      , {
        path: '/settings',
        element: <Settings></Settings>
      }

    ],
  },
]);

export default router;
