import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
const Hero = ({
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
          {/* Engineered for excellence */}
            <strong>innovative power of generation</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Plutolien is a software development company in Bangladesh, working together with businesses to deal with the complexity of software development & catered solutions with excellence. 
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/assets/Illustration1.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
