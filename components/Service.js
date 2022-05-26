import Image from "next/image";
import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";

const Service = () => {
  return (
    <div
    className="bg-gradient-to-b w-full py-14"
    id="pricing"
  >
    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <div className="flex flex-col w-full">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
        What We Do
        </h3>
        <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
        Powering Millions of Websites & Businesses
        </p>
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
          
        {/* Service One Start*/}

        <div className="flex flex-col justify-center items-center shadow-md rounded-xl py-4 px-6 lg:px-12 xl:px-20">
            <div className="p-4 lg:p-0 mt-6 lg:mt-16">
              <Image
                src="/assets/Free.png"
                width={50}
                height={50}
                alt="Free Plan"
              />
              <p className="relative  custom-list my-2">
                Unlimited Bandwitch
            </p>
            </div>
          </div>

          {/* Service One End */}

          {/* Service Two Start */}

          <div className="flex flex-col justify-center items-center shadow-md rounded-xl py-4 px-6 lg:px-12 xl:px-20">
          <div className="p-4 lg:p-0 mt-6 lg:mt-16">
              <Image
                src="/assets/Free.png"
                width={50}
                height={50}
                alt="Free Plan"
              />
              <p className="relative  custom-list my-2">
                Unlimited Bandwitch
            </p>
            </div>
          </div>

        {/* Service Two End */}

        {/* Service Three Start */}

          <div className="flex flex-col justify-center items-center shadow-md rounded-xl py-8 px-4 lg:px-12 xl:px-20">
          <div className="p-4 lg:p-0 mt-6 lg:mt-16">
              <Image
                src="/assets/Free.png"
                width={50}
                height={50}
                alt="Free Plan"
              />
              <p className="relative  custom-list my-2">
                Unlimited Bandwitch
            </p>
            </div>
          </div>

        {/* Service Three End */}

        </div>
      </div>
    </div>

    </div>
  );
};

export default Service;
