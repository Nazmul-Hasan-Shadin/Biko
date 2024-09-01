import React from "react";

const ServiceCard = ({ text }) => {
  return (
    <div>
      <div>
        <div
          style={{ background: "rgb(255, 255, 255)" }}
          className="w-[283px] h-56 border flex justify-center items-center shadow-2xl "
        >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
