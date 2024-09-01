import React from "react";
import bannerImage from "../../../assets/images/banner/banner.png";
import Container from "../../../Container/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-between">
          {/* ==============left side for heading text============= */}
          <div className="bg-gradient-to-r from-[#7188C4] to-[#6F3AFA] text-transparent bg-clip-text">
            <div className="md:w-[700px] space-y-6">
              <h2 className="text-4xl font-semibold">
                যেকোনো প্রকার স্বাস্থ্য সেবা <br /> এবং ডাক্তারি পরামর্শ দেয়া হয়{" "}
                <br /> "সরকারি রেজিস্ট্রার্ড ডাক্তার <br /> দ্বারা রুগী দেখা হয়"
              </h2>

              <h4 className="text-3xl ">
                যেকোনো প্রকার স্বাস্থ্য সেবা এবং ডাক্তারি <br /> পরামর্শ দেয়া হয়
                "সরকারি রেজিস্ট্রার্ড ডাক্তার <br />
                দ্বারা রুগী দেখা হয়"
              </h4>
            </div>
            <button className="py-2 font-bold text-xl mt-8  bg-[#6F3AFA] text-white px-9 rounded-[8px]">
              বিস্তারিত দেখুন
            </button>
          </div>

          {/* ====================right side image=============== */}
          <div className="mx-auto md:mx-0">
            <img src={bannerImage} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
