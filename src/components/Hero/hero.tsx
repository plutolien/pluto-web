import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/assets/hero.png";

export default function Hero() {
  return (
    <div className="relative mt-[48px] overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">innovative power of</span>{" "}
                <span className="block text-[#0B132A] xl:inline">
                  generation.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Plutolien is a software development company in Bangladesh,
                working together with businesses to deal with the complexity of
                software development & catered solutions with excellence
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href={"/about"}>
                    <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0B132A] hover:bg-[#122040] md:py-4 md:text-lg md:px-10 cursor-pointer">
                      Get Stared
                    </div>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href={"/store"}>
                    <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 cursor-pointer">
                      Explore
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:hidden lg:block">
        <Image
          className="hover:animate-[spin_10s_linear_infinite]"
          src={heroImage}
          alt="hero-image"
        />
      </div>
    </div>
  );
}
