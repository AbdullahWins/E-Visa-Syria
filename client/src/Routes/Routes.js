import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ArrivalInformation from "../pages/Forms/FormPages/ArrivalInformation";
import Payment from "../pages/Forms/FormPages/Payment";
import PersonalInformation from "../pages/Forms/FormPages/PersonalInformation";
import Prerequisites from "../pages/Forms/FormPages/Prerequisites";
import Forms from "../pages/Forms/Forms";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/form",
        element: <Forms></Forms>,
      },
      {
        path: "/arrival",
        element: <ArrivalInformation></ArrivalInformation>,
      },
      {
        path: "/prerequisites",
        element: <Prerequisites></Prerequisites>,
      },
      {
        path: "/information",
        element: <PersonalInformation></PersonalInformation>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
        loader: () =>
          fetch("https://ten-days-school-server.vercel.app/courses"),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
