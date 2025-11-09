import { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 🔴 Top Red Bar */}
      <div className="bg-[#ea1228] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-2 gap-2 sm:gap-0 text-center sm:text-left">
        <span className="text-white font-semibold text-sm sm:text-base">
          info@shahshalalfood.co.uk
        </span>

        {/* Social Icons */}
        <div className="flex gap-2 items-center justify-center sm:justify-end">
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg
              className="w-4 h-2 fill-white hover:opacity-80 transition"
              viewBox="0 0 24 24"
            >
              <path d="M16.98 2.99... (Instagram SVG path here)" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" aria-label="TikTok">
            <svg
              className="w-5 h-5 fill-white hover:opacity-80 transition"
              viewBox="0 0 24 24"
            >
              <path d="M20.5 3.5... (TikTok SVG path here)" />
            </svg>
          </a>
        </div>
      </div>

      {/* 🔵 Main Navigation */}
      <div className="bg-[#0a1522] flex items-center justify-between px-4 sm:px-8 h-20 relative">
        {/* Logo */}
        <div className="bg-[#ea1228] rounded-xl flex items-center px-3 py-1 sm:px-4 sm:py-2">
          <img src="/logo.png" alt="Logo" className="h-10 sm:h-14" />
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl sm:hidden focus:outline-none"
        >
          {menuOpen ? <GiCancel /> : <GiHamburgerMenu />}
        </button>

        {/* Nav Links (hidden on mobile) */}
        <nav
          className={`absolute sm:static top-full left-0 w-full sm:w-auto bg-[#0a1522] sm:bg-transparent transition-all duration-300 ${
            menuOpen
              ? "max-h-80 opacity-100 visible"
              : "max-h-0 opacity-0 invisible sm:visible sm:opacity-100 sm:max-h-none"
          } overflow-hidden sm:overflow-visible`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white font-semibold text-base sm:text-lg items-center py-2 sm:py-0">
            <li>
              <Link href="/about">
                <span className="hover:text-[#ea1228] transition cursor-pointer">
                  ABOUT US
                </span>
              </Link>
            </li>
            <li>
              <Link href="/menu">
                <span className="hover:text-[#ea1228] transition cursor-pointer">
                  OUR MENU
                </span>
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <span className="hover:text-[#ea1228] transition cursor-pointer">
                  OUR LOCATIONS
                </span>
              </Link>
            </li>
            <li>
              <Link href="/franchise">
                <span className="hover:text-[#ea1228] transition cursor-pointer">
                  FRANCHISE
                </span>
              </Link>
            </li>

            {/* Locations Button (visible on mobile inside menu) */}
            <li className="block sm:hidden">
              <Link href="/locations">
                <button className="bg-[#ea1228] text-white px-4 py-2 rounded-lg font-bold text-base hover:bg-[#c11123] transition">
                  OUR LOCATIONS
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* OUR LOCATIONS Button (visible only on desktop) */}
        <div className="hidden sm:block">
          <Link href="/locations">
            <button className="bg-[#ea1228] text-white px-8 py-3 rounded-lg font-bold text-base flex items-center gap-2 hover:bg-[#c11123] transition">
              OUR LOCATIONS
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
