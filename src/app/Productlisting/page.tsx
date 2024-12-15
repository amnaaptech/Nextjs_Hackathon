// import Image from 'next/image';
// import React from 'react';

// const ProductListing = () => {
//     const features = [
//       {
//         title: 'Next day as standard',
//         description: 'Order before 3pm and get your order the next day as standard.',
//         icon: TbTruckDelivery,
//       },
//       {
//         title: 'Made by true artisans',
//         description: 'Hand-crafted goods made with real passion and craftsmanship.',
//         icon: IoIosCheckmarkCircleOutline,
//       },
//       {
//         title: 'Unbeatable prices',
//         description: 'For our material and quality, you won’t find better prices anywhere.',
//         icon: MdOutlinePriceChange,
//       },
//       {
//         title: 'Recycled packaging',
//         description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
//         icon: LuSprout,
//       },
//     ];
  
//     return (
//       <>
//         <section>
//           <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
//             {/* Main Product Section */}
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//               <div className="w-full md:w-1/2 h-auto">
//                 <Image
//                   src={'/images/Image Left.png'}
//                   height={800}
//                   width={800}
//                   alt="chair"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
//                 <div>
//                   <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
//                   <p className="py-2 text-lg md:text-xl">$250</p>
//                 </div>
//                 <div className="text-[#505977] text-sm md:text-base">
//                   <h1 className="font-semibold">Description</h1>
//                   <div className="my-4 md:my-6">
//                     <p>
//                       A timeless design, with premium materials features as one of our most popular
//                       and iconic pieces. The dandy chair is perfect for any stylish living space with
//                       beech legs and lambskin leather upholstery.
//                     </p>
//                   </div>
//                   <div className="ml-4">
//                     <ul className="list-disc space-y-1">
//                       <li>Premium material</li>
//                       <li>Handmade upholstery</li>
//                       <li>Quality timeless classic</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <div className="my-8">
//                       <h1 className="font-semibold">Dimensions</h1>
//                     </div>
//                     <div className="flex gap-12 md:gap-20 text-sm md:text-base">
//                       <div>
//                         <h1>Height</h1>
//                         <p>110cm</p>
//                       </div>
//                       <div>
//                         <h1>Width</h1>
//                         <p>75cm</p>
//                       </div>
//                       <div>
//                         <h1>Depth</h1>
//                         <p>50cm</p>
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap justify-between items-center mt-8">
//                       <div className="flex items-center gap-4">
//                         <h1>Amount:</h1>
//                         <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
//                           <span>+</span> 1 <span>-</span>
//                         </button>
//                       </div>
//                       <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             {/* Suggestions Section */}
//             <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">You might also like</h1>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//               {['chair', 'vase', 'silky', 'lamp'].map((item, idx) => (
//                 <div key={idx} className="w-full">
//                   <Image
//                     src={`/images/${item}.png`}
//                     height={700}
//                     width={700}
//                     alt={item}
//                     className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//                   />
//                   <div className="mt-4 text-[#2A254B]">
//                     <p className="py-2">{item === 'chair' ? 'The Dendy Chair' : `The ${item}`}</p>
//                     <p>${item === 'chair' ? 250 : item === 'vase' ? 155 : 125}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
  
//             {/* View Collection Button */}
//             <div className="my-10 flex justify-center">
//               <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
//                 View collection
//               </button>
//             </div>
  
//             {/* Features Section */}
//             <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
//               {features.map((feature, idx) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div key={idx} className="flex flex-col md:w-1/4 p-4 rounded-lg">
//                     <Icon size={30} className="text-[#2A254B]" />
//                     <p className="py-4 font-semibold">{feature.title}</p>
//                     <p>{feature.description}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };
  
//   export default ProductListing;
  import Image from "next/image";
import React from "react";
import Link from "next/link";


const ProductList = () => {
  const features = [
    {
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard.",
      icon: '/images/Delivery.png',

    },
    {
      title: "Made by true artisans",
      description: "Hand-crafted goods made with real passion and craftsmanship.",
      icon: '/images/check.png',
  
    },
    {
      title: "Unbeatable prices",
      description: "For our material and quality, you won’t find better prices anywhere.",
      icon: '/images/wallet.png',
    },
    {
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable.",
      icon: '/images/sprout.png',
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12">
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/chari3.png"
            alt="The Dandy Chair"
            width={800}
            height={800}
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-[#2A254B]">The Dandy Chair</h1>
            <p className="text-xl text-[#505977] mt-2">$250</p>
          </div>
          <div className="text-[#505977]">
            <h2 className="font-semibold text-lg">Description</h2>
            <p className="mt-4 leading-relaxed">
              A timeless design, with premium materials features as one of our most popular and iconic
              pieces. The dandy chair is perfect for any stylish living space with beech legs and
              lambskin leather upholstery.
            </p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions */}
          <div>
            <h2 className="font-semibold text-lg">Dimensions</h2>
            <div className="flex gap-12 mt-4 text-sm text-[#505977]">
              <div>
                <p>Height</p>
                <p>110cm</p>
              </div>
              <div>
                <p>Width</p>
                <p>75cm</p>
              </div>
              <div>
                <p>Depth</p>
                <p>50cm</p>
              </div>
            </div>
          </div>

          {/* Amount and Add to Cart */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mt-6">
            <div className="flex items-center gap-4">
              <p className="font-semibold">Quantity:</p>
              <div className="flex items-center gap-4 bg-[#F5F5F5] px-4 py-2 rounded-md">
                <span className="cursor-pointer">-</span>
                <p>1</p>
                <span className="cursor-pointer">+</span>
              </div>
            </div>
            <Link href="/Addtocard">
            <button className="bg-[#2A254B] text-white px-8 py-3 rounded-md w-full lg:w-auto" >
              Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>

    
{/* You Might Also Like */}
<div className="mt-16">
  <h2 className="text-2xl font-semibold text-[#2A254B]">You might also like</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
    {[
      { name: "The Dandy Chair", price: 250, image: "/images/heroright.png" },
      { name: "The Rustic Vase", price: 155, image: "/images/smvase.png" },
      { name: "The Silky Vase", price: 125, image: "/images/silkvase2.png" },
      { name: "The Luxury Lamp", price: 199, image: "/images/lamp.png" },
    ].map((item, idx) => (
      <div key={idx} className="flex flex-col items-center">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
          className="rounded-lg object-cover w-full hover:scale-105 transition-transform"
        />
        <div className="mt-4 text-center">
          <p className="font-semibold">{item.name}</p>
          <p className="text-[#505977]">${item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
 
             {/* Features Section */}
             <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col md:w-1/4 p-4 rounded-lg">
              {/* Image instead of Icon */}
              <div className="w-10 h-10 mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="py-4 font-semibold">{feature.title}</p>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      {/* Newsletter */}
      <div className="mt-16 bg-[#F9F9F9] py-12 rounded-lg text-center">
        <h2 className="text-2xl font-semibold">Join the club and get the benefits</h2>
        <p className="mt-4 text-[#505977]">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md border border-[#ccc] w-full sm:w-96"
          />
          <button className="bg-[#2A254B] text-white px-8 py-3 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
