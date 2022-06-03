import Image from "next/image";
import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";


const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col  justify-center  w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            About Us
          </h3>
          <p className="text-black-500 mt-4 mb-6">
          We can help you bring success to your business – whether it’s IT consultancy, full-cycle software development, or set up a dedicated developers team.
          </p>
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
        <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
        </div>
      </div>
    </div>

    
  );
};

export default Feature;
