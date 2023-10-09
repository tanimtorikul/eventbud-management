import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Errorpage from "../ErrorPage/Errorpage";
import Services from "../components/Services/Services";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ServicesDetails from "../components/Services/ServicesDetails";
import PrivateRoute from "./PrivateRoute";
import Events from "../components/Events/Events";
import Gallery from "../Pages/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,

      },
    ],
  },
]);

export default router;
