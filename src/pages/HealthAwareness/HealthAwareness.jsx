import React from "react";
import BlogCard from "../Doctors/BlogsCard./BlogCard";
import medicalTreatmentImage from "../../assets/images/banner/medicaltreatmentlogo.png";
import Container from "../../Container/Container";
import BikoMedicalTreatment from "../Home/BIkoMedicalTreatment/BikoMedicalTreatment";

const HealthAwareness = () => {
  return (
    <Container>
      <BikoMedicalTreatment image={medicalTreatmentImage} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </Container>
  );
};

export default HealthAwareness;
