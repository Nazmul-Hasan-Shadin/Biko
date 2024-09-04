import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Doctors from "../pages/Doctors/Doctors";

 
export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
     
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/doctors",
          element:<Doctors/>,
        },
      ],
    },
  ]);