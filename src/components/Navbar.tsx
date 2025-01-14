"use client"

import Link from 'next/link';
import { useState } from 'react';

const NavLink = ({ href, children }) => (
  <Link 
    href={href} 
    className="text-white hover:text-primary-yellow transition-colors duration-200 relative group"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-yellow transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-blue shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-primary-yellow font-bold text-xl">
              RoundnetNS
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/rankings">Rankings</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-yellow"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/rankings">Rankings</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 