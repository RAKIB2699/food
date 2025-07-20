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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
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
          fetch(`http://localhost:3000/foods/${params.id}`),
        element: <FoodDetails />
      }

    ]
  },
]);

export default router;