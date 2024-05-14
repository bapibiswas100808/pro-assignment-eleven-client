import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Components/Home/Home";
import Services from "../../Components/Services/Services";
import Login from "../../Components/Login/Login";
import AddService from "../../Components/DashBoard/AddService/AddService";
import ManageService from "../../Components/DashBoard/ManageService/ManageService";
import BookedService from "../../Components/DashBoard/BookedService/BookedService";

import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Register from "../../Components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleService from "../../Components/SingleService/SingleService";
import BookingService from "../../Components/BookingService/BookingService";
import UpdateService from "../../Components/UpdateService/UpdateService";
import ToDoService from "../../Components/DashBoard/ToDoService/ToDoService";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://pro-assignment-eleven-server.vercel.app/allServices"),
      },
      { path: "/login", element: <Login></Login> },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookedService",
        element: (
          <PrivateRoute>
            <BookedService></BookedService>
          </PrivateRoute>
        ),
      },
      {
        path: "/toDoService",
        element: (
          <PrivateRoute>
            <ToDoService></ToDoService>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://pro-assignment-eleven-server.vercel.app/allBookings"),
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/updateService/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(
            `https://pro-assignment-eleven-server.vercel.app/allServices/${params.id}`
          ),
      },
      {
        path: "/bookingService/:id",
        element: <BookingService></BookingService>,
        loader: ({ params }) =>
          fetch(
            `https://pro-assignment-eleven-server.vercel.app/allServices/${params.id}`
          ),
      },
      {
        path: "/singleService/:id",
        element: (
          <PrivateRoute>
            <SingleService></SingleService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://pro-assignment-eleven-server.vercel.app/allServices/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
