import React from "react";
import Logo from "../../public/assets/pluto_Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Linkedin from "../../public/assets/Icon/linkedin.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo className="h-8 w-auto mb-6" />
          <p className="mb-4">
            We will work with you to develop a career path worthy of your talents and our legacy.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 ">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 ">
              <Linkedin className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 ">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          {/* <p className="text-gray-400">©2020LaslesVPN</p> */}
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Company</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Brand Assets{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Contact Us{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Press</p>
          <ul className="text-black-500">
          <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pluto News{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Bug Bounty Program {" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Life @ Plutolien{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">We’re Hiring!</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Software Engineer{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Quality Analyst{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            See All Openings{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
