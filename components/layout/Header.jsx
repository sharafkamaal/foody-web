'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-secondary text-white relative z-50">
      {/* Top Bar */}
      <div className="relative h-[50px] overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div
          className="absolute top-0 right-0 h-full bg-primary"
          style={{
            width: '35%',
            clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />
        <div className="relative h-full container mx-auto px-4 flex justify-between items-center">
          <a 
            href="mailto:info@kamaalshalalfood.co.uk" 
            className="text-white text-sm font-medium hover:text-primary transition-colors duration-300"
          >
            info@kamaalshalalfood.co.uk
          </a>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/kamaalshalalfooduk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://tiktok.com/@kamaalshalalfooduk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="relative h-[90px] flex items-center">
        <div
          className="absolute left-0 top-0 bottom-0 bg-primary z-0"
          style={{
            width: '280px',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
          }}
        />

        <div className="relative container mx-auto px-4 flex justify-between items-center w-full z-10">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="bg-primary px-5 py-2.5 rounded-xl flex items-center gap-3 hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L20 8L22 6L26 10L24 12L26 14L22 18L20 16L16 20L12 16L10 18L6 14L8 12L6 10L10 6L12 8L16 4Z" fill="#ea1228" />
                  <circle cx="16" cy="12" r="2" fill="#ea1228" />
                  <circle cx="16" cy="20" r="2" fill="#ea1228" />
                </svg>
              </div>
              <div className="text-white leading-tight">
                <div className="text-2xl font-bold italic">kamaal&apos;S</div>
                <div className="text-[8px] tracking-[2px] uppercase font-semibold -mt-1">HALAL FOOD</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Using Your Theme Colors */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              href="/about" 
              className="text-white text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300"
            >
              ABOUT US
            </Link>
            <Link 
              href="/menu" 
              className="text-white text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300"
            >
              OUR MENU
            </Link>
            <Link 
              href="/locations" 
              className="text-white text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300"
            >
              OUR LOCATIONS
            </Link>
            <Link 
              href="/franchise" 
              className="text-white text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300"
            >
              FRANCHISE
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:block w-56 relative group">
              <input
                type="text"
                placeholder="Search menu, items..."
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/15 hover:bg-white/15 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 group-hover:text-primary transition-colors" />
            </div>

            {/* Cart Icon */}
            <Link href="/cart" className="relative group">
              <div className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                <ShoppingCart className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  3
                </span>
              </div>
            </Link>

            {/* Admin Icon */}
            <Link href="/admin" className="group">
              <div className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                <User className="w-5 h-5 text-white" />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md bg-white/10 hover:bg-primary transition-all duration-300 transform hover:scale-110"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-secondary border-t border-white/10">
          <nav className="flex flex-col items-start p-5 gap-2">
            <Link 
              href="/about" 
              className="w-full text-white font-semibold hover:text-primary hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300" 
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/menu" 
              className="w-full text-white font-semibold hover:text-primary hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300" 
              onClick={() => setMenuOpen(false)}
            >
              Our Menu
            </Link>
            <Link 
              href="/locations" 
              className="w-full text-white font-semibold hover:text-primary hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300" 
              onClick={() => setMenuOpen(false)}
            >
              Our Locations
            </Link>
            <Link 
              href="/franchise" 
              className="w-full text-white font-semibold hover:text-primary hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300" 
              onClick={() => setMenuOpen(false)}
            >
              Franchise
            </Link>
            
            {/* Mobile Search */}
            <div className="w-full mt-3 relative">
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}