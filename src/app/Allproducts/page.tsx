import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const allproducts = () => {
  return (
    <div className='px-4 md:px-8 py-12 text-[#2A254B] mt-12"'>
      {/* Product Items row 1*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
        {/* Product 1 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/heroright.png'}
            height={700}
            width={700}
            alt="chair"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Dendy Chair</p>
            <p>$250</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/smvase.png'}
            height={700}
            width={700}
            alt="vase"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">Rustic VaseSet</p>
            <p>$155</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/silkvase2.png'}
            height={700}
            width={700}
            alt="silky vase"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Silky Vase</p>
            <p>$125</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/lamp.png'}
            height={700}
            width={700}
            alt="lamp"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />        
          </Link>
  
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Lucky Lamp</p>
            <p>$399</p>
          </div>
        </div>
      </div>



 {/* Product Items row 2*/}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
        {/* Product 1 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/lamp2.png'}
            height={700}
            width={700}
            alt="chair"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Dandy chair</p>
            <p>$250</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/slikvase3.png'}
            height={700}
            width={700}
            alt="vase"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">Rustic Vase Set</p>
            <p>$155</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/chair5.png'}
            height={700}
            width={700}
            alt="silky vase"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Silky Vase</p>
            <p>$125</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/chair4.png'}
            height={700}
            width={700}
            alt="lamp"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />        
          </Link>
  
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Lucky Lamp</p>
            <p>$399</p>
          </div>
        </div>
      </div>

  {/* Product Items row 3*/}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
        {/* Product 1 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/heroright.png'}
            height={700}
            width={700}
            alt="chair"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Dendy Chair</p>
            <p>$250</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/smvase.png'}
            height={700}
            width={700}
            alt="vase"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">Rustic VaseSet</p>
            <p>$155</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/silkvase2.png'}
            height={700}
            width={700}
            alt="silky vase"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            </Link>
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Silky Vase</p>
            <p>$125</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full h-auto">
          <Link href="/Productlisting"> 
          <Image
            src={'/images/lamp.png'}
            height={700}
            width={700}
            alt="lamp"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />        
          </Link>
  
          <div className="mt-4 text-[#2A254B]">
            <p className="py-2">The Lucky Lamp</p>
            <p>$399</p>
          </div>
        </div>
      </div>

    </div>
    

)}
  
export default allproducts;
