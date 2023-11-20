'use client'
import React, { useState } from 'react';

const links = ['MEN', 'WOMEN', 'UNISEX', 'COLLECTIONS'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white p-4 flex flex-wrap items-center justify-between">
        <div className="text-black text-3xl font-semibold mx-4">CLOTECK</div>
        {/* Hamburger Icon */}
        <div className="sm:hidden mx-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div className={`w-full sm:flex sm:items-center sm:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 sm:gap-6 list-none font-semibold">
            {links.map((link) => (
              <li key={link} className="hover:underline underline-offset-4 transition duration-300 ease-in-out">
                <a href="#" className="text-black no-underline px-2">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="w-screen border-t" />
    </div>
  );
}
