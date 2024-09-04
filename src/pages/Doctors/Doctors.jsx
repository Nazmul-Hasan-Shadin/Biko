import React from "react";
import BikoMedicalTreatment from "../Home/BIkoMedicalTreatment/BikoMedicalTreatment";
import medicalTreatmentImage from "../../assets/images/banner/medicaltreatmentlogo.png";


import BlogCard from "./BlogsCard./BlogCard";
import DoctorCar from "./DoctorCar";
import Container from "../../Container/Container";
const Doctors = () => {
  return (
    <div>
    <Container>
    <BikoMedicalTreatment image={medicalTreatmentImage} />

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
     <div>
      <DoctorCar/>
      <DoctorCar/>
      <DoctorCar/>
      <DoctorCar/>
      <DoctorCar/>
     </div>

  {/* right side content */}

    <div className="">
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>

    </div>

  
</div>
    </Container>
    </div>
  );
};

export default Doctors;
