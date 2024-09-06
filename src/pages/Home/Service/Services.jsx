import React from "react";
import ServiceCard from "./ServiceCard";
import Container from "../../../Container/Container";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-3 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4 mx-auto">
            <Link to={"/doctors"}>
              <ServiceCard text={"Emergancy Helpline"} />
            </Link>
            <Link to={"/products"}>
              {" "}
              <ServiceCard text={"Bd Best Doctors"} />
            </Link>
            <Link to={'/health-awareness'}><ServiceCard text={"Health and Awareness"} /></Link>
            
            <ServiceCard text={"Medicine & Medical Accessory"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
