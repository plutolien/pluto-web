import Image from "next/image";
import React from "react";
import Link from "next/link";

// Image
import aboutImage from "../../../public/assets/about.jpg";

function about() {
  return (
    <>
      <section className="max-w-7xl mx-auto py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            {/* Abiut Image Start */}
            <div className="md:6/12 lg:w-5/12">
              <Image
                src={aboutImage}
                alt="Picture of the author"
                width="350px"
                height="300px"
                layout="responsive"
                loading="lazy"
              />
            </div>
            {/* About Image End */}

            {/* About Content Start */}
            <div className="md:6/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                About Us
              </h2>
              <p className="mt-6 text-gray-600">
                We can help you bring success to your business – whether it’s IT
                consultancy, full-cycle software development, or set up a
                dedicated developers team.
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                We are proud to work with truly innovative clients and the
                products we truly believe in. Here are just a few of the
                projects we’ve had the privilege to work with.
              </p>
              {/* About Content End */}

              {/* Button Start */}

              <div className="py-[25px] flex justify-between items-center">
                <Link href={"/about"}>
                  <div className="text-base font-medium rounded-md text-white bg-[#0B132A] hover:bg-[#122040]-[#122040] md:py-4 md:text-lg md:px-10 cursor-pointer">
                    Get Stared
                  </div>
                </Link>
              </div>
              {/* Button End */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
