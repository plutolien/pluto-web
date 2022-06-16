import React from "react";

interface title {
    header: string;
    description: string;
}

export default function common_title({ header, description }: title ) {
    return (
        <>
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-[62px] text-[62px] font-bold title-font mb-4 text-gray-900">
          {header}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-[20px] pt-[20px]">
          {description}
          </p>
        </div>
        </div>
        
        </>
    );
}