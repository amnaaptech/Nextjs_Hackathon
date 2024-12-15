
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      {/* Top Header */}
      <div className="container mx-auto py-2 flex items-center justify-between border-b border-gray-200">
        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Avion
          </Link>

          <div className="flex items-center">
            {/* Search Icon */}
            <button>
              <Image
                src="/images/search.png"
                alt="Search Icon"
                width={22}
                height={22}
              />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none block text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Search Icon (Left Section) */}
          <div className="flex">
            <button>
              <Image
                src="/images/search.png"
                alt="Search Icon"
                width={22}
                height={22}
              />
            </button>
          </div>

          {/* Logo (Center) */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Avion
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button>
              <Link href="/Addtocard">
              <Image
                src="/images/cart.png"
                alt="Cart Icon"
                width={22}
                height={22}
              />
              </Link>
            </button>
            {/* User Profile */}
            <Image src="/images/user.png" alt="User Icon" width={22} height={22} />
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center mt-6">
        {/* Navbar Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          Plant Pots
          </Link>
          <Link href="/Allproducts" className="text-gray-600 hover:text-gray-800">
          Ceramics
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          Tables
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          Chairs
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          Cutlery
          </Link>
          <Link href="/About" className="text-gray-600 hover:text-gray-800">
            About Us
          </Link>
    
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 py-4">
          <div className="space-y-2 text-center">
            {/* Link */}
            <Link
              href="/"
              className="block text-gray-600 hover:text-gray-800">
          Plant Pots
            </Link>
            <Link
              href="/Allproducts"
              className="block text-gray-600 hover:text-gray-800">
             Ceramics
            </Link>
            <Link
              href="/About"
              className="block text-gray-600 hover:text-gray-800">
            Tables
            </Link>
            <Link
              href="/About"
              className="block text-gray-600 hover:text-gray-800">
           Chairs
            </Link>
            <Link
              href="/About"
              className="block text-gray-600 hover:text-gray-800">
            Cutlery
            </Link>
            <Link
              href="/About"
              className="block text-gray-600 hover:text-gray-800">
          About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
