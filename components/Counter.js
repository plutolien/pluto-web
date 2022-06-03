import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";


const Counter = ({
  listUser = [
    {
      name: "Full-cycle software development with consistent processes and modern technologies.",
      descrption: "Software Solution",
      // icon: "/assets/Logo.png",
    },
    {
      name: "Mobile applications developments with excellent performance and great user experiences.",
      descrption: "App Development",
      // icon: "/assets/Logo.png",
    },
    {
      name: "Advanced software testing services with quality and reliability for any application.",
      descrption: "Quality Assurance",
      // icon: "/assets/Logo.png",
    },
  ],
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 pl-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                {/* <div className="flex items-center justify-center bg-orange-100 w-24 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div> */}
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.descrption}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Counter;
