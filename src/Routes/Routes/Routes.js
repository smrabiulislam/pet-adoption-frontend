import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../../component/Signin/Signin";
import Signin from "../../component/Signin/Signin";
import Signup from "../../component/Signup/Signup";
import Main from "../../Layout/Main";
import GetPetById from "../../Pages/GetPetById/GetPetById";

import Homepage from "../../Pages/Homepage/Homepage";
import About from "../../Pages/Profile/About/About";
import AddPet from "../../Pages/Profile/AddPet/AddPet";
import MyPosts from "../../Pages/Profile/MyPosts/MyPosts";

import ProfilePage from "../../Pages/Profile/ProfilePage/ProfilePage";
import Settings from "../../Pages/Profile/Settings/Settings";
import SinglePetPage from "../../Pages/Profile/SinglePetPage/SinglePetPage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
        path: "/profile",
        element: (
          <PrivateRoutes>
            <ProfilePage></ProfilePage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-pet",
        element: <AddPet></AddPet>,
      },
      {
        path: "/my-posts",
        element: <MyPosts></MyPosts>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/singlepetpage",
        element: <SinglePetPage></SinglePetPage>,
      },
      {
        path: "/petById",
        element: <GetPetById></GetPetById>,
      },
    ],
  },
]);

export default router;
