// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <div>
//       <footer className="bg-[#251742] text-white">
//         <div className="container mx-auto px-4 py-6 lg:py-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {/* Menu */}
//             <div>
//               <h2 className="mb-4 text-sm font-semibold uppercase">Menu</h2>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="hover:underline">New arrivals</Link></li>
//                 <li><Link href="#" className="hover:underline">Best sellers</Link></li>
//                 <li><Link href="#" className="hover:underline">Recently viewed</Link></li>
//                 <li><Link href="#" className="hover:underline">Popular this week</Link></li>
//                 <li><Link href="#" className="hover:underline">All products</Link></li>
//               </ul>
//             </div>

//             {/* Categories */}
//             <div>
//               <h2 className="mb-4 text-sm font-semibold uppercase">Categories</h2>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="hover:underline">Crockery</Link></li>
//                 <li><Link href="#" className="hover:underline">Furniture</Link></li>
//                 <li><Link href="#" className="hover:underline">Homeware</Link></li>
//                 <li><Link href="#" className="hover:underline">Plant pots</Link></li>
//                 <li><Link href="#" className="hover:underline">Chairs</Link></li>
//               </ul>
//             </div>

//             {/* Our Company */}
//             <div>
//               <h2 className="mb-4 text-sm font-semibold uppercase">Our Company</h2>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="hover:underline">About us</Link></li>
//                 <li><Link href="#" className="hover:underline">Vacancies</Link></li>
//                 <li><Link href="#" className="hover:underline">Contact us</Link></li>
//                 <li><Link href="#" className="hover:underline">Privacy</Link></li>
//                 <li><Link href="#" className="hover:underline">Returns policy</Link></li>
//               </ul>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h2 className="mb-4 text-sm font-semibold uppercase">Join our mailing list</h2>
//               <form action="#" className="flex items-center">
//                 <input
//                   type="email"
//                   placeholder="your@email.com"
//                   className="w-full px-4 py-2 rounded-l bg-[#3b3361] text-white placeholder-gray-300 focus:outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-white text-[#251742] rounded-r hover:bg-gray-200"
//                 >
//                   Sign up
//                 </button>
//               </form>
//             </div>
//           </div>

//           <hr className="my-6 border-gray-600" />

//           <div className="flex justify-between items-center flex-wrap">
//             <p className="text-sm">© 2022 Avion LTD</p>
//             <div className="flex space-x-4">
//               <Link href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></Link>
//               <Link href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></Link>
//               <Link href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></Link>
//               <Link href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></Link>
//               <Link href="#" className="hover:text-gray-300"><i className="fab fa-pinterest"></i></Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-[#251742] text-white py-10">
//       <div className="container mx-auto px-4">
//         {/* Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Address Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-4">Avion</h2>
//             <p className="text-sm mb-2">21 New York Street</p>
//             <p className="text-sm mb-2">New York City</p>
//             <p className="text-sm mb-2">United States of America</p>
//             <p className="text-sm">432 34</p>
//           </div>

//           {/* Social Links Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-4">Social links</h2>
//             <div className="flex space-x-4">
//               <Link href="/images/likedin.jpg" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></Link>
//               <Link href="/images/facebook.jpg" className="hover:text-gray-300"><i className="fab fa-facebook"></i></Link>
//               <Link href="/images/insta.jpg" className="hover:text-gray-300"><i className="fab fa-instagram"></i></Link>
//               <Link href="/images/twiter.png" className="hover:text-gray-300"><i className="fab fa-twitter"></i></Link>
//               <Link href="/images/pintrest.png" className="hover:text-gray-300"><i className="fab fa-pinterest"></i></Link>
//             </div>
//           </div>

//           {/* Menu Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-4">Menu</h2>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:underline">New arrivals</Link></li>
//               <li><Link href="#" className="hover:underline">Best sellers</Link></li>
//               <li><Link href="#" className="hover:underline">Recently viewed</Link></li>
//               <li><Link href="#" className="hover:underline">Popular this week</Link></li>
//               <li><Link href="#" className="hover:underline">All products</Link></li>
//             </ul>
//           </div>

//           {/* Categories Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-4">Categories</h2>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:underline">Crockery</Link></li>
//               <li><Link href="#" className="hover:underline">Furniture</Link></li>
//               <li><Link href="#" className="hover:underline">Homeware</Link></li>
//               <li><Link href="#" className="hover:underline">Plant pots</Link></li>
//               <li><Link href="#" className="hover:underline">Chairs</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <hr className="my-6 border-gray-600" />
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm">© 2022 Avion LTD</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="bg-[#251742] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Avion</h2>
            <p className="text-sm mb-2">21 New York Street</p>
            <p className="text-sm mb-2">New York City</p>
            <p className="text-sm mb-2">United States of America</p>
            <p className="text-sm">432 34</p>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Social links</h2>
            <div className="flex space-x-4">
              <Link href="#">
                <img
                  src="/images/likedin.jpg"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-80"
                style={{ background: "none", padding: "0", border: "none"}}/>
              </Link>
              <Link href="#">
                <img
                  src="/images/facebook.jpg"
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-80"
                />
              </Link>
              <Link href="#">
                <img
                  src="/images/insta.jpg"
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-80"
                />
              </Link>
              <Link href="#">
                <img
                  src="/images/twiter.png"
                  alt="Twitter"
                  className="w-6 h-6 hover:opacity-80"
                />
              </Link>
              <Link href="#">
                <img
                  src="/images/pintrest.png"
                  alt="Pinterest"
                  className="w-6 h-6 hover:opacity-80"
                />
              </Link>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">New arrivals</Link></li>
              <li><Link href="#" className="hover:underline">Best sellers</Link></li>
              <li><Link href="#" className="hover:underline">Recently viewed</Link></li>
              <li><Link href="#" className="hover:underline">Popular this week</Link></li>
              <li><Link href="#" className="hover:underline">All products</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Crockery</Link></li>
              <li><Link href="#" className="hover:underline">Furniture</Link></li>
              <li><Link href="#" className="hover:underline">Homeware</Link></li>
              <li><Link href="#" className="hover:underline">Plant pots</Link></li>
              <li><Link href="#" className="hover:underline">Chairs</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2022 Avion LTD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
