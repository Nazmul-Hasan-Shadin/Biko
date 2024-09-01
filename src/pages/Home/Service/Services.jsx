import React from "react";
import ServiceCard from "./ServiceCard";
import Container from "../../../Container/Container";

const Services = () => {
  return (
    <div>
  <Container>
  <div className="flex gap-3 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4 mx-auto">
          <ServiceCard text={"Emergancy Helpline"} />
          <ServiceCard text={"Bd Best Doctors"} />
          <ServiceCard text={"Health and Awareness"} />
          <ServiceCard text={"Medicine & Medical Accessory"} />
        </div>
      </div>
  </Container>
    </div>
  );
};

export default Services;
