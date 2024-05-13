import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Components/Home/Home";
import Services from "../../Components/Services/Services";
import Login from "../../Components/Login/Login";
import AddService from "../../Components/DashBoard/AddService/AddService";
import ManageService from "../../Components/DashBoard/ManageService/ManageService";
import BookedService from "../../Components/DashBoard/BookedService/BookedService";
import ToDoService from "../../Components/DashBoard/ToDoService/ToDoService";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Register from "../../Components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleService from "../../Components/SingleService/SingleService";
import BookingService from "../../Components/BookingService/BookingService";
import UpdateService from "../../Components/UpdateService/UpdateService";

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
        loader: () => fetch("http://localhost:5000/allServices"),
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
      { path: "/toDoService", element: <ToDoService></ToDoService> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/updateService/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServices/${params.id}`),
      },
      {
        path: "/bookingService/:id",
        element: <BookingService></BookingService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServices/${params.id}`),
      },
      {
        path: "/singleService/:id",
        element: (
          <PrivateRoute>
            <SingleService></SingleService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServices/${params.id}`),
      },
    ],
  },
]);

export default Router;
