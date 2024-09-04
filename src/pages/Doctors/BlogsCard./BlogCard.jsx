import React from 'react';
import logo from "../../../assets/images/logo/bikologo.png";

import dengo from "../../../assets/images/blogs/dengo.png";
const BlogCard = () => {
    return (
        <div className="max-w-[497px] pt-11 pl-10 pr-7 mb-5  bg-[#D6E8FE]">
          <img className="mb-2" src={logo} alt="" />
          <div className="max-w-[424px] ">
            <figure className="">
              <img src={dengo} alt="Mosquite image " />
            </figure>

            <div className="bg-[#F6F6F6] space-y-2  pb-3">
              <h3 className="text-2xl font-bold ">মহা সমস্যা  ডেঙ্গূ </h3>
              <p className="max-w-[426px]">
                বাংলাদেশে ডেঙ্গু পরিস্থিতি ভয়াবহ আকার ধারণ করার পর ডেঙ্গু
                জ্বরের জীবাণু বহনকারী এডিস মশা সম্পর্কিত বিভিন্ন তথ্য সম্পর্কে
                আগ্রহ তৈরি হয়েছে মানুষের মধ্যে।
              </p>
              <button className="bg-[#303030] px-8  text-white  py-1 rounded-lg flex ml-auto">
                বিস্তারিত পড়ুন
              </button>
            </div>
          </div>
        </div>
    );
};

export default BlogCard;