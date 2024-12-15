
//code is ok but not responsive

// import Link from "next/link";
// import Image from "next/image";
// import React from 'react'

// const Hero = () => {
//   return (
//       <div className=" sm:h-[502px] sm:w-[390px] lg:w-[704px] xl:w-[1280px] lg:h-[704px] xl:h-[1280px]  " >
//         {/* for image container */}
//  <div className="lg:w-[1280] lg:h-[584] lg:top-[60px] lg:left-[80px] gap-0 mt-10 ml-40 sm:w[390px] sm:h-[502px] flex flex-col"> 
//     <section className="relative bg-[#2A254B]">
//       <div className="container mx-auto px-4 flex flex-wrap items-center lg:flex-nowrap gap-10">
//         {/* Left Side */}
//         <div className="flex flex-col gap-10 bg-[#2A254B] ml-6">
//           {/* First Block */}
//           <div
//             className="relative w-[513px] h-[187px] mb-[140px] ml-[60px] gap-[41px]"
//             style={{ opacity: 1 }}
//           >
//             <h2
//               className="font-clash-display text-[32px] text-white font-normal leading-[44.8px] text-left"
//               style={{
//                 textUnderlinePosition: "from-font",
//               }}
//             >
//               The furniture brand for the future, with timeless designs.
//             </h2>

//             {/* Button */}
//             <button
//               className="flex items-center justify-center bg-[#F9F9F926] text-white font-satoshi text-[16px]  font-medium leading-[24px] lg:w-[170px] lg:h-[56px] px-[32px] py-[16px] gap-[10px] mt-16"
//               style={{ opacity: 1 }}
//             >
//               View collection
//             </button>
//           </div>

//           {/* Second Block */}
//           <div
//             className="relative bg-[#2A254B] text-white p-4 w-[602px] h-[81px] gap-[0px]  left-5 "
//             style={{ opacity: 1 }}
//           >
//             <p
//               className="font-satoshi text-[18px] font-normal leading-[27px] "
//               style={{
//                 textUnderlinePosition: "from-font",
//                 textDecorationSkipInk: "none",
//               }}
//             >
//               A new era in eco-friendly furniture with Avelon, the French luxury
//               retail brand with nice fonts, tasteful colors, and a beautiful way
//               to display things digitally using modern web technologies.
//             </p>
//           </div>
//         </div>

//         {/* Right Side (Image Section) */}
//         <div className="relative lg:w-[535px] mr-5 lg:h-[584px] left-20 sm:w-full sm:h-auto ">
//           <Image
//             src="/images/heroright.png"
//             alt="Hero Image"
//             width={520}
//             height={584}
//             className="object-cover w-full h-full"
//             style={{ opacity: 1 }}
//           />
//         </div>
//       </div>
//     </section>

// </div>
//        </div>
//   )
// }

// export default Hero

//its responsive but, its width , and height is not perfect,and on larage screens its not responsive
// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="sm:h-[502px] sm:w-[390px] md:h-[800px] md:w-[768px] lg:w-[704px] xl:w-[1280px] lg:h-[704px] xl:h-[1280px] lg:ml-48 lg:mt-16  xl:mt-16 xl:mr-[700px]  1xl:mt-16    2xl:ml-[465px]  2xl:mt-16">
//     <section className="relative bg-[#2A254B]">
//       <div className="container mx-auto px-4 py-5 flex flex-wrap items-center lg:flex-nowrap ">
//         {/* Left Side */}
//         <div className="flex flex-col gap-10 text-white lg:w-1/2">
//           {/* First Block */}
//           <div className="space-y-6">
//             <h2 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-snug">
//               The furniture brand for the future, with timeless designs.
//             </h2>
//             <button className="bg-[#F9F9F926] text-white font-satoshi text-base lg:text-lg font-medium px-8 py-3 lg:px-10 lg:py-4 rounded-lg">
//               View collection
//             </button>
//           </div>

//           {/* Second Block */}
//           <div className="bg-[#2A254B] text-white p-4 rounded-lg">
//             <p className="font-satoshi text-sm sm:text-base lg:text-lg leading-relaxed">
//               A new era in eco-friendly furniture with Avelon, the French luxury
//               retail brand with nice fonts, tasteful colors, and a beautiful way
//               to display things digitally using modern web technologies.
//             </p>
//           </div>
//         </div>

//         {/* Right Side (Image Section) */}
//         <div className="lg:w-1/2">
//           <Image
//             src="/images/heroright.png"
//             alt="Hero Image"
//             width={520}
//             height={584}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default Hero;
// import Image from "next/image";
// import React from "react";
///issuee, on sm screen
// const Hero = () => {
//   return (
//     <div className="sm:h-[502px] sm:w-[390px] md:h-[800px] md:w-[768px] lg:w-[768px] xl:w-[1280px] lg:h-[704px] xl:h-[1280px] flex justify-center items-center mx-auto">
//       <section className="relative bg-[#2A254B] w-full">
//         <div className="container mx-auto px-4 py-5 flex flex-wrap items-center lg:flex-nowrap justify-center">
//           {/* Left Side */}
//           <div className="flex flex-col gap-10 text-white lg:w-1/2">
//             {/* First Block */}
//             <div className="space-y-6">
//               <h2 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-snug">
//                 The furniture brand for the future, with timeless designs.
//               </h2>
//               <button className="bg-[#F9F9F926] text-white font-satoshi text-base lg:text-lg font-medium px-8 py-3 lg:px-10 lg:py-4 rounded-lg">
//                 View collection
//               </button>
//             </div>

//             {/* Second Block */}
//             <div className="bg-[#2A254B] text-white p-4 rounded-lg">
//               <p className="font-satoshi text-sm sm:text-base lg:text-lg leading-relaxed">
//                 A new era in eco-friendly furniture with Avelon, the French
//                 luxury retail brand with nice fonts, tasteful colors, and a
//                 beautiful way to display things digitally using modern web
//                 technologies.
//               </p>
//             </div>
//           </div>

//           {/* Right Side (Image Section) */}
//           <div className="hidden sm:block lg:w-1/2">
//             {/* The image is hidden on `sm` screens (min-width: 640px and max-width: 767px) */}
//             <Image
//               src="/images/heroright.png"
//               alt="Hero Image"
//               width={520}
//               height={584}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;

// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="sm:h-[700px] sm:w-[640px] md:h-[800px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] lg:h-[704px] xl:h-[1280px] flex  items-center mx-auto">
//       <section className="relative bg-[#2A254B] w-full">
//         <div className="container mx-auto px-4 py-5 flex items-center lg:flex-nowrap lg:gap-10">
//           {/* Left Side */}
//           <div className="flex flex-col gap-10 text-white w-full lg:w-1/2">
//             {/* First Block */}
//             <div className="space-y-6">
//               <h2 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-snug">
//                 The furniture brand for the future, with timeless designs.
//               </h2>
//               <button className="bg-[#F9F9F926] text-white font-satoshi text-base lg:text-lg font-medium px-8 py-3 lg:px-10 lg:py-4 rounded-lg">
//                 View collection
//               </button>
//             </div>

//             {/* Second Block */}
//             <div className="bg-[#2A254B] text-white p-4 rounded-lg">
//               <p className="font-satoshi text-sm sm:text-base lg:text-lg leading-relaxed">
//                 A new era in eco-friendly furniture with Avelon, the French
//                 luxury retail brand with nice fonts, tasteful colors, and a
//                 beautiful way to display things digitally using modern web
//                 technologies.
//               </p>
//             </div>
//           </div>

//           {/* Right Side (Image Section) */}
//           <div className="hidden sm:block lg:w-1/2">
//             {/* The image is hidden on `sm` screens (min-width: 640px and max-width: 767px) */}
//             <Image
//               src="/images/heroright.png"
//               alt="Hero Image"
//               width={520}
//               height={584}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;

// import Image from "next/image";
// import React from "react";
// import Brand from "./Features";


// const Hero = () => {
    
//     return (
//         // parent div 
//         <div>
//         {/* // {1st section of hero start} */}
//         <div className="sm:h-[700px] sm:w-[640px] md:h-[800px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] lg:h-[704px] xl:h-[1280px] flex justify-center items-baseline mt-16 mx-auto">
//             <section className="relative bg-[#2A254B] xl:w-[1440px] xl:h-[700px] ">
//                 <div className="container mx-auto sm:px-3 sm:my-0  md:px-3 md:my-0  lg:px-3 lg:my-0 flex flex-col sm:flex-row items-center lg:flex-nowrap lg:gap-10">
//                     {/* Left Side */}
//                     <div className="flex flex-col gap-10 text-white w-full sm:w-1/2 sm:h-[584px] sm:p-0 sm:ml-6 sm:pb-2 md:pb-2 ">
//                         {/* First Block */}
//                         <div className="space-y-6 ">
//                             <h2 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal md:pt-2 sm:pt-2 sm:pb-2 lg:pb-2 lg:mb-20 leading-snug text-left">
//                                 The furniture brand for the future, with timeless designs.
//                             </h2>
//                             <div className="lg:mb-32">
//                                 <button className="bg-[#F9F9F926] text-white font-satoshi text-base lg:text-lg font-medium px-8 pt-0  lg:px-10    lg:py-4 rounded-lg">
//                                     View collection
//                                 </button>
//                             </div>
//                         </div>
//                         {/* Second Block */}
//                         <div className="bg-[#2A254B] text-white p-4 rounded-lg">
//                             <p className="font-satoshi text-sm sm:text-base lg:text-lg leading-relaxed">
//                                 A new era in eco-friendly furniture with Avelon, the French
//                                 luxury retail brand with nice fonts, tasteful colors, and a
//                                 beautiful way to display things digitally using modern web
//                                 technologies.
//                             </p>
//                         </div>
//                     </div>
//                     {/* Right Side (Image Section) */}
//                     <div className="hidden sm:block lg:w-1/2  md:w-1/2 md:m-[40px]  ">
//                         {/* The image is hidden on `sm` screens (min-width: 640px and max-width: 767px) */}
//                         <Image
//                             src="/images/heroright.png"
//                             alt="Hero Image"
//                             width={520}
//                             height={584}
//                             className="w-full h-auto object-cover md:m-3 "
//                             />
//                     </div>
//                 </div>
//             </section>
//         </div>
// </div>
                          
    
//     );
// };

// export default Hero;
import Image from "next/image";
import React from "react";

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
                  <button className="bg-[#F9F9F926] text-white font-satoshi text-base lg:text-lg font-medium px-8 lg:px-10 lg:py-4 rounded-lg">
                    View collection
                  </button>
                </div>
              </div>
              {/* Second Block */}
              <div className="bg-[#2A254B] text-white p-4 rounded-lg">
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
