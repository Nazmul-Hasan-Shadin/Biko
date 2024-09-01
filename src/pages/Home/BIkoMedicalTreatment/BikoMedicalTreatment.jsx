import React from "react";
import Container from "../../../Container/Container";

const BikoMedicalTreatment = ({image}) => {
  return (
    <div className="my-10">
      <Container>
        <img src={image} alt="" />
      </Container>
    </div>
  );
};

export default BikoMedicalTreatment;
