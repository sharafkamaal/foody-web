// components/layout/Footer.jsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 max-w-7xl">
        
        {/* Main Footer Content - Custom Grid with Wider Center */}
        <div className="grid grid-cols-0 md:grid-cols-12 gap-6 md:gap-0">
          
          {/* Left Column - Quick Links (Narrower - 3 columns) */}
          <div className="md:col-span-3 md:pr-8 lg:pr-10 md:border-r md:border-gray-600">
            <h3 className="text-lg font-bold mb-6 border-l-4 border-white pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-[#ea1228] hover:text-[#c11123] transition-colors duration-200 text-base font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white hover:text-[#ea1228] transition-colors duration-200 text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/locations" 
                  className="text-white hover:text-[#ea1228] transition-colors duration-200 text-base"
                >
                  Our Locations
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className="text-white hover:text-[#ea1228] transition-colors duration-200 text-base"
                >
                  Our Menus
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-[#ea1228] transition-colors duration-200 text-base"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-white hover:text-[#ea1228] transition-colors duration-200 text-base"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link 
                  href="/franchise" 
                  className="text-white hover:text-[#ea1228] transition-colors duration-200 text-base"
                >
                  Franchise
                </Link>
              </li>
              <li>
                <Link 
                  href="/allergen-information" 
                  className="text-white hover:text-[#ea1228] transition-colors duration-200 text-base"
                >
                  Allergen Infromation
                </Link>
              </li>
            </ul>
          </div>

          {/* Center Column - Logo & Description (WIDER - 6 columns) */}
          <div className="md:col-span-6 flex flex-col items-center text-center md:px-8 lg:px-10 md:border-r md:border-gray-600">
            <div className="mb-6">
              <Image 
                src="/logo.png" 
                alt="Shah&apos;s Halal Food UK" 
                width={160} 
                height={102}
                className="h-auto w-32 sm:w-36 md:w-40"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-300 max-w-lg">
              Shah&apos;s Halal Food UK – your ultimate destination for authentic and flavourful halal cuisine.
              Here, every bite is a celebration of rich spices, fresh ingredients, and culinary passion. From
              our sizzling platters to our savoury wraps, we craft each dish with care and tradition. Join us
              for a mouthwatering journey, where every meal tells a story of quality and taste
            </p>
          </div>

          {/* Right Column - Follow Us & Contact (Narrower - 3 columns) */}
          <div className="md:col-span-3 md:pl-6 lg:pl-8">
            {/* Follow Us Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-5 border-l-4 border-white pl-3">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/shahshalalfooduk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#ea1228] flex items-center justify-center hover:bg-[#c11123] hover:scale-105 transition-all duration-300 shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@shahshalalfooduk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#ea1228] flex items-center justify-center hover:bg-[#c11123] hover:scale-105 transition-all duration-300 shadow-lg"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-lg font-bold mb-5 border-l-4 border-white pl-3">
                Contact Us
              </h3>
              <div className="text-base text-white leading-relaxed space-y-3">
                <p>
                  Unit 6, Lexus House, Rosslyn Crescent,<br />
                  London HA1 2RZ
                </p>
                <p>
                  <a 
                    href="mailto:info@shahshalalfood.co.uk"
                    className="hover:text-[#ea1228] transition-colors duration-200"
                  >
                    info@shahshalalfood.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 Shah&apos;s Halal UK
          </p>
        </div>
      </div>
    </footer>
  );
}
