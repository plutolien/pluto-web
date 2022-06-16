import React from "react";

interface title {
  header: string;
  description: string;
}

export default function common_service({ header, description }: title) {
  return (
    <>
      <div className="relative group rounded-lg bg-[#EDE7F9] cursor-grab transition hover:z-[1] lg:hidden xl:block">
        <div className="min-h-[100%] relative p-8 space-y-8  rounded-lg transition duration-300 group-hover:bg-white  group-hover:scale-90">
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#47ACF7]">
              {header}
            </h5>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
