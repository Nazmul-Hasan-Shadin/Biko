import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Doctors from "../pages/Doctors/Doctors";
import ProductsPage from "../pages/Products/ProductsPage";
import HealthAwareness from "../pages/HealthAwareness/HealthAwareness";
import BestDoctorList from "../pages/BestDoctors/BestDoctorList";
import DoctorsInformation from "../pages/DoctorsInformation/DoctorsInformation";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/health-awareness",
        element: <HealthAwareness />,
      },
      {
        path: "/doctors-list",
        element: <BestDoctorList />,
      },
      {
        path: "/doctors-information",
        element: <DoctorsInformation />,
      },
    ],

  },
]);
