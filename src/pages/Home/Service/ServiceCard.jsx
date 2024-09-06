import React from "react";

const ServiceCard = ({ text }) => {
  return (
    <div>
      <div>
        <div
          style={{ background: "rgb(255, 255, 255)" }}
          className="w-[283px] flex items-center h-56 border  text-center shadow-2xl "
        >
          <p className="font-semibold text-3xl text-[#303030] w-[70%] mx-auto  ">{text}  </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
