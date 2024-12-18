"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Ourproduct = () => {
  return (
    <div>
     <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto group'>
              <Image
                src={'/images/sofa.png'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/heroright.png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/chair2.png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* Button */}
          <div className='my-10 flex justify-center items-center'>
          <Link href="/Allproducts">
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]'>
              View products
            </button>
          </Link>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default Ourproduct

