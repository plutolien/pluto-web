import React from "react";
import CommonTitle from "@/components/Common/Title/common_title";
import CommonService from "@/components/Common/Service/common_service";

function service() {
  return (
    <div className="max-w-7xl  mx-auto py-16  overflow-hidden">
      <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <CommonTitle
          header={"What Pluto Do"}
          description={
            "We are proud to work with truly innovative clients and the products we truly believe in. Here are just a few of the projects we’ve had the privilege to work with."
          }
        />
        <div className="mt-16 gap-6 grid  overflow-hidden sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {/* Service One Start */}
          <CommonService
            header={"Software Development"}
            description={
              " Full-cycle software development with consistent processes and modern technologies."
            }
          />
          {/* Service One End  */}

          {/* Service Two Start */}
          <CommonService
            header={"Mobile App Development"}
            description={
              "Mobile applications developments with excellent performance and great user experiences."
            }
          />
          {/* Service Two End */}

          {/* Service Three Start */}
          <CommonService
            header={"UX/UI Design"}
            description={
              "Extensive experience in professional UX/UI design to craft modern applications."
            }
          />
          {/* Service Three End */}

          {/* Service Four Start */}
          <CommonService
            header={"Software Quality Assurance"}
            description={
              "Advanced software testing service with quality and reliabilityfor any application."
            }
          />
          {/* Service Four End */}
        </div>
      </div>
    </div>
  );
}

export default service;
