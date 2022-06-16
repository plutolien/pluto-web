import React from "react";
import Image from "next/image";
import Avatar from "../../../public/assets/icon-circle.png";

function facts() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-[100px] mx-auto">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium pl-[1rem]">
                We take pride in our work.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium pl-[1rem]">
                Transparent pricing model.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium pl-[1rem]">
                We sign NDA if requested.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium pl-[1rem]">
                We put more effort into brainstorming.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium pl-[1rem]">
                We focus on one project at a time.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium pl-[1rem]">
                We write code for humans, machines can also read garbage.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium">
                Writing clean code is our passion.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-[2rem] h-full items-center">
              <Image src={Avatar} alt="picture" width="20px" height="20px" />
              <span className="title-font font-medium pl-[1rem]">
                We appreciate the flexibility and agile teamwork.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default facts;
