import React from "react";

function counter() {
  return (
    <section className="max-w-7xl mx-auto text-gray-600 body-font">
      <div className="container px-[50px] py-[50px] mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                20
              </h2>
              <p className="leading-relaxed">Team Members</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                15
              </h2>
              <p className="leading-relaxed">Amazing Products</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                88%
              </h2>
              <p className="leading-relaxed">client retention rate.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                6
              </h2>
              <p className="leading-relaxed">event participates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default counter;
