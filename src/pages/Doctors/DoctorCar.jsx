import React from "react";
import doctors from "../../assets/images/doctors/doctors1.png";
const DoctorCar = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row gap-3 items-center border p-2 mb-2  ">
        <img src={doctors} alt="doctors image fro hired" />

        <div className="">
          <h2 className="font-bold text-[27px]">Dr. Anamul </h2>
          <p>Dhaka Medical College</p>
          <p>Burn and Plastic Surgery Unit</p>
          <p>FCPS (Dhaka medical College)</p>
          BMDC REG.436287
        </div>

        <div className="mt-5 px-2  flex flex-col items-center  bg-[#D6E8FE]">
          <h2 className="text-[22px] text-center font-semibold">
            Consult With Doctor
          </h2>
          <h3 className="text-xl my-3  text-center text-[#4B7E20]">
            Only Tk 49
          </h3>
          <button
            style={{ color: "rgb(38, 50, 56)" }}
            className="bg-[#bbc7cd] px-5 rounded-lg py-2 text-[#263238]  mt-8 mb-4"
          >
            Doctor Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCar;
