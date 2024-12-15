// "use client"
// import React from "react";
// const About = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
//         <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
//           A brand built on the love of craftsmanship, quality, and outstanding customer service
//         </div>
//         <div className="mt-6 md:mt-0">
//           <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
//             View our products
//           </button>
//         </div>
//       </div>

//       {/* Story Section */}
//       <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
//         <div className="bg-custom-purple w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
//           <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
//           <p className="mt-6">
//             A global brand with local beginnings, our story began in a small studio in South London in early 2014.
//           </p>
//           <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
//             View Collection
//           </button>
//         </div>
//         <div className="w-full md:w-2/5">
//           <img
//             src="/images/About1.png"
//             alt="About main"
//             className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
//           />
//         </div>
//       </div>

//       {/* Service Section */}
//       <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
//         <img
//           src="/images/About2.png"
//           alt="Service"
//           className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
//         />
//         <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
//           <h1 className="text-xl md:text-2xl text-custom-purple">
//             Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
//           </h1>
//           <p className="text-custom-purple mt-6">
//             When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
//             mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
//             our Chelsea boutique became the hotbed for the London interior design community.
//           </p>
//           <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="w-full h-auto pb-16">
//         <h1 className="text-center text-custom-purple text-xl">What makes our brand different</h1>
//         <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
//           {[
//             {
//               img: "/images/Delivery.png",
//               title: "Next day as standard",
//               desc: "Order before 3pm and get your order the next day as standard",
//             },
//             {
//               img: "/images/check.png",
//               title: "Made by true artisans",
//               desc: "Handmade crafted goods made with real passion and craftsmanship",
//             },
//             {
//               img: "/images/wallet.png",
//               title: "Unbeatable prices",
//               desc: "For our materials and quality you won’t find better prices anywhere",
//             },
//             {
//               img: "/images/Sprout.png",
//               title: "Recycled packaging",
//               desc: "We use 100% recycled materials to ensure our footprint is more manageable",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
//               />
//               <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
//               <p className="text-custom-purple mt-4">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="w-full h-auto bg-gray-100 py-8">
//         <div className="m-auto w-11/12 bg-white p-8 md:p-16">
//           <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
//           <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
//             Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
//           </p>
//           <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
//             <input
//               type="text"
//               placeholder="you@gmail.com"
//               className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
//             />
//             <button className="bg-custom-purple h-12 w-32 rounded-sm text-white">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>

// );
// };

// export default About;

// const About = () => {
//   return (
//     <div className="w-full h-auto">
//       {/* Story Section */}
//       <div
//         className="flex flex-row justify-center items-center w-full h-auto bg-white"
//         style={{
//           width: "1440px",
//           height: "598px",
//           padding: "60px 80px",
//           gap: "16px",
//         }}
//       >
//         {/* Left Side */}
//         <div
//           className="text-white flex flex-col justify-between"
//           style={{
//             width: "634px",
//             height: "478px",
//             padding: "64px 75px 54px 64px",
//             background: "#2A254B",
//           }}
//         >
//           <h1 className="text-2xl font-bold">It started with a small idea</h1>
//           <p className="mt-2 text-base">
//             A global brand with local beginnings, our story began in a small studio
//             in South London in early 2014.
//           </p>
//           <button
//             className="bg-white text-black h-12 w-40 rounded-sm mt-10 hover:bg-gray-200"
//           >
//             View Collection
//           </button>
//         </div>

//         {/* Right Side */}
//         <div
//           className="flex justify-center items-center"
//           style={{
//             width: "630px",
//             height: "478px",
//           }}
//         >
//           <img
//             src="/images/About1.png"
//             alt="Story section visual"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
// new code 
"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
        </div>
      </div>
{/* Story Section */}
<div className="w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 gap-4">
  {/* Left Side */}
  <div className="bg-[#2A254B] text-white p-6 sm:p-8 md:p-16 flex flex-col justify-between w-full md:w-[634px] md:h-[478px] sm:w-[324px] sm:h-[281px] sm:top-[32px] sm:left-[24px]">
    <h1 className="text-base sm:text-lg md:text-2xl font-[\'Clash Display\'] leading-[24px] sm:leading-[28px] md:leading-[32px]">
      It started with a small idea
    </h1>
    <p className="sm:mt-4 font-[\'Satoshi\'] text-xs sm:text-sm md:text-base leading-[18px] sm:leading-[21px] md:leading-[24px]">
      A global brand with local beginnings, our story began in a small studio in South London in early 2014
    </p>
    <button className="mt-6 sm:mt-8 md:mt-10 bg-[#F9F9F926] text-white py-2 px-6 sm:px-8 rounded-sm w-full sm:w-1/2 md:w-40 md:pb-14 md:h-16 h-14 sm:h-10 sm:justify-center bg-input-bg  ">
      View Collection
    </button>
  </div>
  {/* Right Side */}
  <div className="w-full md:w-[634px] md:h-[478px] sm:w-[324px] sm:h-[259px] sm:top-[337px] sm:left-[24px]">
    <img
      src="/images/About1.png"
      alt="Story Section"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
    />
  </div>
</div>

      {/* Service Section */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div
          className="w-full md:w-1/2 h-[603px] sm:w-[390px] sm:h-[358px] md:h-[603px]"
          style={{ backgroundImage: `url('/images/About2.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
        ></div> 
        {/* Right Side Content */}
        <div
          className="w-full md:w-1/2 bg-[#F9F9F9] p-8 md:py-16 md:px-20 flex flex-col justify-between sm:w-[342px] sm:h-[264] " 
          style={{ height: "603px" }}
        >
          <h1 className="text-lg md:text-2xl font-[\'Clash Display\'] text-[#505977]">
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h1>
          <p className="md:mb-44 sm:mb-48 font-[\'Satoshi\'] text-sm md:text-base text-[#505977] leading-[21.6px]">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button
            className="mt-10 bg-white text-[#2A254B] py-2 px-8 rounded-sm"
            style={{ width: "150px", height: "56px" }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Features Section old */}
      {/* <div className="w-full bg-white py-16">
        <h1 className="text-center text-custom-purple text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[{
            img: "/images/Delivery.png",
            title: "Next day as standard",
            desc: "Order before 3pm and get your order the next day as standard",
          },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/images/wallet.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center">
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="px-4 md:px-8 py-12 text-[#2A254B]">
        {/* Title */}
        {/* <h1 className="text-center text-xl md:text-2xl font-semibold">
          What makes our brand different
        </h1> */}
       
        {/* Features */}
        {/* <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg"> */}
          {/* Feature 1 */}
          {/* <div className="flex flex-col  md:w-[25%] p-4 rounded-lg" style={{backgroundColor:"bg-gray-200"}}>
            <Image src='/images/Delivery.png' alt="img" width={22} height={22} ></Image>
            <p className="py-4 font-semibold">Next day as standard</p>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div> */}
      
          {/* Feature 2 */}
          {/* <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <Image src='/images/check.png' alt="img" width={22} height={22}></Image>
            <p className="py-4 font-semibold">Made by true artisans</p>
            <p>Hand-crafted goods made with real passion and craftsmanship.</p>
          </div> */}
      
          {/* Feature 3 */}
          {/* <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <Image src='/images/Wallet.png' alt="img" width={22} height={22}></Image>
            <p className="py-4 font-semibold">Unbeatable prices</p>
            <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
          </div> */}
      
          {/* Feature 4 */}
          {/* <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
          
            <Image src='/images/sprout.png' alt="img" width={22} height={22}></Image>
            <p className="py-4 font-semibold">Recycled packaging</p>
            <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
          </div>
        </div>
      </div> */}
    <div className="px-4 md:px-8 py-12 text-[#2A254B]" style={{ backgroundColor: "bg-gray-200" }}>
  {/* Title */}
  <h1 className="text-center text-xl md:text-2xl font-semibold">
    What makes our brand different
  </h1>

  {/* Features */}
  <div className="flex flex-col md:flex-row gap-5 mt-12 text-base md:text-lg justify-center">
    {/* Feature 1 */}
    <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
      <div className="flex items-center justify-center w-10 h-10">
        <Image src="/images/Delivery.png" alt="Delivery Icon" width={22} height={22} />
      </div>
      <p className="py-4 font-semibold text-center text-xl">Next day as standard</p>
      <p className="text-center text-xl">
        Order before 3pm and get your order the next day as standard.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
      <div className="flex items-center justify-center w-10 h-10">
        <Image src="/images/check.png" alt="Artisan Icon" width={22} height={22} />
      </div>
      <p className="py-4 font-semibold text-center text-xl">Made by true artisans</p>
      <p className="text-center text-xl">
        Hand-crafted goods made with real passion and craftsmanship.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
      <div className="flex items-center justify-center w-10 h-10">
        <Image src="/images/Wallet.png" alt="Wallet Icon" width={22} height={22} />
      </div>
      <p className="py-4 font-semibold text-center text-xl">Unbeatable prices</p>
      <p className="text-center text-xl">
        For our material and quality, you won&apos;t find better prices anywhere.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
      <div className="flex items-center justify-center w-10 h-10">
        <Image src="/images/sprout.png" alt="Sustainability Icon" width={22} height={22} />
      </div>
      <p className="py-4 font-semibold text-center text-xl">Recycled packaging</p>
      <p className="text-center text-xl">
        We use 100% recycled packaging to ensure our footprint is manageable.
      </p>
    </div>
  </div>
</div>
      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-[#2A254B;]  h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
