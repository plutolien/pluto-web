import React from 'react'

function services() {
return (

<div className="max-w-7xl  mx-auto py-16  overflow-hidden">
    <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div>
            <span className="text-gray-600 text-lg font-semibold">services</span>
            <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">What We Do</h2>
        </div>
        <div className="mt-16 gap-6 grid  overflow-hidden sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">

        {/* Service One Start */}
        <div className="relative group rounded-lg bg-[#EDE7F9] cursor-grab transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="min-h-[100%] relative p-8 space-y-8  rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#47ACF7]">Software <br /> Development</h5>
                        <p className="text-lg text-gray-600">Full-cycle software development with consistent processes and modern technologies.</p>
                    </div>
                    {/* <a href="#" className="flex justify-between items-center group-hover:text-[#47ACF7]">
                        <span className="items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0B132A] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Explore</span>
                    </a> */}
                </div>
            </div>

            <div className="relative min-h-[250px] group rounded-lg bg-[#F2EAEE] cursor-grab transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="min-h-[100%] relative p-8 space-y-8  rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#47ACF7]">Mobile App Development</h5>
                        <p className="text-lg text-gray-600">Mobile applications developments with excellent performance and great user experiences.</p>
                    </div>
                </div>
            </div>

            <div className="min-h-[250px] relative group rounded-lg bg-[#E7F0F3] cursor-grab transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="relative min-h-[250px] p-8 space-y-8  rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#47ACF7]">UX/UI <br /> Design</h5>
                        <p className="text-lg text-gray-600">Extensive experience in professional UX/UI design to craft modern applications.</p>
                    </div>
                </div>
            </div>

            <div className="min-h-[250px] relative group rounded-lg bg-[#E7EAF6] cursor-grab transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="relative min-h-[250px] p-8 space-y-8  rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#47ACF7]"> Software Quality Assurance </h5>
                        <p className="text-lg text-gray-600">Advanced software testing services with quality and reliability for any application.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

)
}

export default services