import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import { Component } from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children:[
        {
           index: 'true',
           Component:Home 
        },
        {
          path:'/login',
          Component:Login
        },
        {
          path:'/signin',
          Component: Register
        }
    ]
  },
]);

export default router;