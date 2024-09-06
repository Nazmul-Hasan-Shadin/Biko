import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import ServiceCard from "../Service/ServiceCard";
import Services from "../Service/Services";
import VideoSection from "../video/video";
import BikoMedicalTreatment from "../BIkoMedicalTreatment/BikoMedicalTreatment";
import Products from "../Products/Products";
import medicalTreatmentImage from "../../../assets/images/banner/medicaltreatmentlogo.png";
import doctorImage from "../../../assets/images/banner/bioimage.png";
import Footer from "../../Footer/Footer";



const Home = () => {
  return (
    <div>
   
      <Banner />
      <Services />
      <VideoSection />
      <BikoMedicalTreatment image={medicalTreatmentImage}></BikoMedicalTreatment>
      <Services />
      <BikoMedicalTreatment  image={medicalTreatmentImage}/>
      <Products></Products>
      <BikoMedicalTreatment />
      <BikoMedicalTreatment  image={doctorImage}/>
      <Products/>
   
      
    </div>
  );
};

export default Home;
