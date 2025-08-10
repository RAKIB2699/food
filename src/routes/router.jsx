import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import { Component } from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddFood from "../AddFood/AddFood";
import PrivateRoute from "../Provider/PrivateRoute";
import AvailableFood from "../AvailableFood/AvailableFood";
import FoodDetails from "../FoodDetails/FoodDetails";
import ManageFood from "../ManageFood/ManageFood";
import MyFoodRequest from "../MyFoodRequest/MyFoodRequest";
import ErrorPage from "../shared/ErrorPages";
import AboutUs from "../shared/AboutUs";
import FAQ from "../shared/FAQ";
import Contact from "../shared/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: 'true',
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/signin',
        Component: Register
      },
      {
        path: '/aboutus',
        Component: AboutUs
      },
      {
        path: '/faq',
        Component: FAQ
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/addfood',
        element: <PrivateRoute><AddFood /></PrivateRoute>
      },
      {
        path: '/availablefood',
        element: <PrivateRoute><AvailableFood /></PrivateRoute>
      },
      {
        path: '/foods/:id',
        loader: ({ params }) =>
          fetch(`https://foody-hub-server.vercel.app/foods/${params.id}`),
        element: <FoodDetails />
      },
      {
        path: '/manage-food',
        element: <PrivateRoute><ManageFood /></PrivateRoute>,
      },
      {
        path:'/myfoodrequest',
        element: <PrivateRoute><MyFoodRequest/></PrivateRoute>
      }

    ]
  },
]);

export default router;