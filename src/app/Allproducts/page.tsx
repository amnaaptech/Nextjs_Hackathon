import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllProducts = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[140px] md:h-[209px]">
        <Image
          src="/images/productbanner.png"
          alt="Product banner image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg sm:text-2xl md:text-4xl font-medium">
          All products
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-4 py-4 md:px-8 bg-white shadow-sm">
        {/* Small Screen Layout */}
        <div className="flex gap-4 md:hidden sm:w-[390px] sm:h-[96px]">
          <button className="w-[163px] h-[56px] bg-[#F9F9F9] text-gray-600 text-sm px-6 py-4 sm:ml-4 flex items-center justify-center">
            Filters ▼
          </button>
          <button className="w-[163px] h-[56px] bg-[#F9F9F9] text-gray-600 text-sm px-6 py-4 flex items-center justify-center">
            Sorting ▼
          </button>
        </div>

        {/* Medium Screen Layout */}
        <div className="hidden md:flex flex-row justify-between items-center">
          <div className="flex gap-12 text-gray-600 text-sm">
            <button>Category ▼</button>
            <button>Product type ▼</button>
            <button>Price ▼</button>
            <button>Brand ▼</button>
          </div>
          <div className="flex gap-2 text-gray-600 text-sm">
            <span>Sorting by:</span>
            <button>Date added ▼</button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {/* Product 1 */}
          <ProductCard image="/images/heroright.png" name="The Dendy Chair" price="$250" />
          <ProductCard image="/images/smvase.png" name="Rustic Vase Set" price="$155" />
          <ProductCard image="/images/silkvase2.png" name="The Silky Vase" price="$125" />
          <ProductCard image="/images/lamp.png" name="The Lucky Lamp" price="$399" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          <ProductCard image="/images/lamp2.png" name="The Dandy Chair" price="$250" />
          <ProductCard image="/images/slikvase3.png" name="Rustic Vase Set" price="$155" />
          <ProductCard image="/images/chair5.png" name="The Silky Vase" price="$125" />
          <ProductCard image="/images/chair4.png" name="The Lucky Lamp" price="$399" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          <ProductCard image="/images/heroright.png" name="The Dendy Chair" price="$250" />
          <ProductCard image="/images/smvase.png" name="Rustic Vase Set" price="$155" />
          <ProductCard image="/images/silkvase2.png" name="The Silky Vase" price="$125" />
          <ProductCard image="/images/lamp.png" name="The Lucky Lamp" price="$399" />
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ image, name, price }: { image: string; name: string; price: string }) => {
  return (
    <div className="w-full h-auto">
      <Link href="/Productlisting">
        <Image
          src={image}
          height={700}
          width={700}
          alt={name}
          className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
      </Link>
      <div className="mt-4 text-[#2A254B]">
        <p className="py-2">{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default AllProducts;
