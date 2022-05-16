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
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Skyrocket Your Business With Our Products
          </h3>
          <p className="my-2 text-black-500">
          We are the makers of popular Software like the PMS, ERP, POS and a lot more. Our innovative tools and solutions empower people to achieve the freedom to get their business online and drive it forward.
          </p>
          <div className="justify-end items-center">
            <ButtonPrimary>consultation</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
