import React from "react";
import logo from "../../../assets/images/logo/bikologo.png";
import icon from "../../../assets/images/logo/avatar.png";
import { FaBell } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import Container from "../../../Container/Container";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex  md:gap-9  sm:px-3 md:px-0  py-7 items-center justify-between ">
          <img className=" w-24 md:w-32 h-" src={logo} alt="" />

          {/* ============search field ==================== */}
          <div className="flex-1 border  hidden md:block">
            <div className="flex">
              <input
                style={{
                  bordeRadius: " 5px 0px 0px 5px",
                  padding: " 9px 19px 9px 19px",
                  height: "37px",
                  border: "1px solid rgb(217, 217, 217)",
                  borderRadius: "5px 0px 0px 5px",
                  opacity: "0.68",
                }}
                type="text"
                className="w-full"
              />

              <div className="text-2xl text-white h-[37px] bg-[#E91D26] flex items-center justify-center w-[34px]">
                <IoMdSearch />
              </div>
            </div>
          </div>

          {/* ===========right side icons list============== */}
          <div>
            <div className="flex items-center   gap-5">
              <div className="flex items-center  gap-2 ">
                <RxAvatar className="text-2xl w-5 h-5" />
                <span className="leading-[16px] text-[12px]">
                  <span className="text-[#E91D26] font-normal ">sing in</span>{" "}
                  <br />
                  <span className="font-semibold ">account</span>
                </span>
              </div>

              <div className="flex items-center gap-2 ">
                <FaBell />
                <span className="hidden md:block">Notificaiton</span>
              </div>

              <div className="relative">
                <button
                  style={{
                    padding: "padding: 10.5px 26.24px 10.5px 26.24px;",
                    width: "140px",
                  }}
                  className="bg-[#E91D26] hidden md:block py-2 rounded   justify-center items-center gap-3 text-white "
                >
                  view cart
                </button>

                <div className="absolute  -translate-y-1/2 text-white right-3 top-1/2">
                  <IoCartOutline />
                </div>
              </div>

              <div className=" md:hidden bg-[#E91D26] flex justify-center items-center text-white w-8 h-8 ">
                <div className="">
                  <IoCartOutline />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================search fild for small device====================== */}
        <div className="flex sm:hidden">
          <input
            style={{
              bordeRadius: " 5px 0px 0px 5px",
              padding: " 9px 19px 9px 19px",
              height: "37px",
              border: "1px solid rgb(217, 217, 217)",
              borderRadius: "5px 0px 0px 5px",
              opacity: "0.68",
            }}
            type="text"
            className="w-full"
          />
            <div className="text-2xl text-white h-[37px] bg-[#E91D26] flex items-center justify-center w-[34px] ">
              <IoMdSearch />
            </div>
      
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
