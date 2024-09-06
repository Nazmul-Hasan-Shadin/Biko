import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import footerrightImage from "../../assets/images/logo/rightsidefooter.png";
import bottomImageOfFooter from "../../assets/images/logo/footer.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#343434] text-white px-5 md:px-[70px]  py-[55px]">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-10">
            <div className="space-y-4">
              <span>Help Desk</span>
              <span className="flex gap-2 text-2xl">
                <BiLogoGmail />
                <IoLogoWhatsapp />
              </span>
              <h2>Follow us</h2>
            </div>
            {/* ==========biko origin============ */}
            <div className="space-y-4 my-9 md:my-0">
              <span className="block">About Biko</span>
              <span className="block">Journey Of Biko</span>
              <span className="block">Biko Team</span>
              <span className="block">Biko Gallery</span>
              <span className="block">Message from our well wisher</span>
            </div>
            <div className="space-y-4">
              <span className="block">Become a Entrepreneur</span>
              <span className="block">Earn with Biko</span>
              <span className="block">Biko Campus Ambassador</span>
              <span className="block">EducationGallery Instructor</span>
              <span className="block">Biko Vlunteer</span>
              <span className="block">Biko Agent</span>
            </div>
            <div className="space-y-4 my-9 md:my-0">
              <span className="block">Privacy Policy</span>
              <span className="block">Team and Conditions</span>
              <span className="block">Refund</span>
              <span className="block">Trade License:</span>
              <span className="block">18488/02-015-18488</span>
              <span className="block">Biko Agent</span>
            </div>
            <div className="bg-white p-2  flex-1 my-9 md:my-0 ">
              <img className="w-full h-[232px]" src={footerrightImage} alt="" />
            </div>
          </div>

          <img src={bottomImageOfFooter} className="pt-7" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
