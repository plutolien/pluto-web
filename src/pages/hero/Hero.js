import React from "react";
import Image from "next/image";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
          Grow Online With  <strong>Simplified Solutions</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
          At Plutolien, we believe creating web technology shouldn’t be difficult or complicated. We build quality products and tools that are simple to use, affordable, and reliable to help entrepreneurs, professionals, and grow online.
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/assets/hero_img.svg"
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
