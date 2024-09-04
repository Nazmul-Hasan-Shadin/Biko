import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />


      <Outlet></Outlet>

      <Footer/>
    </div>
  );
};

export default MainLayout;
