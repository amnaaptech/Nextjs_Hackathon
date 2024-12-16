
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    // Parent div
    <div>
      {/* Hero Section */}
      <div className="sm:h-[700px] sm:w-[640px] md:h-[800px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] lg:h-[704px] xl:h-[1280px] flex justify-center items-baseline mt-16 mx-auto">
        <section className="relative bg-[#2A254B] xl:w-[1440px] xl:h-[700px]">
          <div className="container mx-auto sm:px-3 flex flex-col sm:flex-row items-center lg:flex-nowrap lg:gap-10">
            {/* Left Side */}
            <div className="flex flex-col gap-10 text-white w-full sm:w-1/2 sm:h-[584px] sm:p-0 sm:ml-6">
              {/* First Block */}
              <div className="space-y-6">
                <h2 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-snug text-left">
                  The furniture brand for the future, with timeless designs.
                </h2>
                <div>
<Link href="/Allproducts">
                  <button className="bg-[#F9F9F926] text-white font-satoshi text-base lg:text-lg font-medium px-8 lg:px-10 lg:py-4 rounded-lg lg:mt-10">
                    View collection
                  </button>
</Link>
                </div>
              </div>
              {/* Second Block */}
              <div className="bg-[#2A254B] text-white p-4 rounded-lg lg:mt-16">
                <p className="font-satoshi text-sm sm:text-base lg:text-lg leading-relaxed">
                  A new era in eco-friendly furniture with Avelon, the French
                  luxury retail brand with nice fonts, tasteful colors, and a
                  beautiful way to display things digitally using modern web
                  technologies.
                </p>
              </div>
            </div>
            {/* Right Side (Image Section) */}
            <div className="hidden sm:block lg:w-1/2 md:w-1/2">
              <Image
                src="/images/heroright.png"
                alt="Hero Image"
                width={520}
                height={584}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
