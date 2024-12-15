// import Image from "next/image";
// import React from "react";

// type Feature = {
//   Image: string;
//   title: string;
//   description: string;
// };

// const Brand: React.FC = () => {
//   const features: Feature[] = [
//     {
//         Image:"/images/Delivery.png",
//         title: "Next day as standard",
//         description: "Order before 3pm and get your order the next day as standard.",
//     },
//     {
        
//         Image:"/images/check.png",
//         title: "Made by true artisans",
//       description: "Handmade crafted goods made with real passion and craftsmanship.",
//     },
//     {
        
//     Image:"/images/check.png",
//         title: "Unbeatable prices",
//         description: "For our materials and quality, you won’t find better prices anywhere.",
//     },
//     {
    
//         Image:"/images/check.png",
//       title: "Recycled packaging",
//       description: "We use 100% recycled packaging to ensure our footprint is manageable.",
//     },
//   ];

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//       <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//         What makes our brand different
//       </h2>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//           >
//             <div className="mb-4 text-4xl">{feature.Image}</div>
//             <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               {feature.title}
//             </h5>
//             <p className="text-base font-normal text-gray-700 dark:text-gray-400">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brand;
import Image from "next/image";
import React from "react";

// type Feature = {
//   imageSrc: string; // Renamed 'Image' to 'imageSrc' for better clarity
//   title: string;
//   description: string;
// };

// const Brand: React.FC = () => {
//   const features: Feature[] = [
//     {
//       imageSrc: "/images/Delivery.png",
//       title: "Next day as standard",
//       description: "Order before 3pm and get your order the next day as standard.",
//     },
//     {
//       imageSrc: "/images/check.png",
//       title: "Made by true artisans",
//       description: "Handmade crafted goods made with real passion and craftsmanship.",
//     },
//     {
//       imageSrc: "/images/check.png",
//       title: "Unbeatable prices",
//       description: "For our materials and quality, you won’t find better prices anywhere.",
//     },
//     {
//       imageSrc: "/images/sprout.png",
//       title: "Recycled packaging",
//       description: "We use 100% recycled packaging to ensure our footprint is manageable.",
//     },
//   ];

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//       <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//         What makes our brand different
//       </h2>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//           >
//             {/* Properly rendering the image */}
//             <div className="mb-4">
//               <Image
//                 src={feature.imageSrc}
//                 alt={feature.title}
//                 width={50} 
//                 height={50}
//                 className="object-contain"
//               />
//             </div>
//             <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               {feature.title}
//             </h5>
//             <p className="text-base font-normal text-gray-700 dark:text-gray-400">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brand;
//anothet
const Brand = () => {
  return (
<section>
<div className="px-4 md:px-8 py-12 text-[#2A254B]">
  {/* Title */}
  <h1 className="text-center text-xl md:text-2xl font-semibold">
    What makes our brand different
  </h1>

  {/* Features */}
  <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
    {/* Feature 1 */}
    <div className="flex flex-col  md:w-[25%] p-4  rounded-lg">
      <Image src='/images/Delivery.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Next day as standard</p>
      <p>Order before 3pm and get your order the next day as standard.</p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
      <Image src='/images/check.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Made by true artisans</p>
      <p>Hand-crafted goods made with real passion and craftsmanship.</p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
      <Image src='/images/Wallet.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Unbeatable prices</p>
      <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
    
      <Image src='/images/sprout.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Recycled packaging</p>
      <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
    </div>
  </div>
</div>
</section>
  )};
export default Brand;
