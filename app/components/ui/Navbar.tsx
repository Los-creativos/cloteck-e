'use client'
import { useState, useEffect } from 'react';

const links = ['MEN', 'WOMEN', 'UNISEX', 'COLLECTIONS'];

export default function Nadbar() {
  // State for window width to handle responsive design
  const [windowWidth, setWindowWidth] = useState(undefined);

  // Effect to update the state on resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to determine if we are on mobile, tablet or desktop
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <div>
      <nav className={`bg-white flex ${isMobile ? 'flex-col items-start' : 'justify-between items-center'} h-20 p-4`}>
        <p className='text-black text-3xl font-semibold m-4'>CLOTECK</p>
        {!isMobile && (
          <ul className={`flex ${isTablet ? 'flex-col' : 'gap-6'} list-none font-semibold ml-4`}>
            {links.map((link) => (
              <li key={link} className='pl-2 hover:underline decoration-wavy underline-offset-4 transition duration-300 ease-in-out'>
                <a href='#' className='text-black no-underline'>{link}</a>
              </li>
            ))}
          </ul>
        )}
        <div className='flex gap-6 ml-auto'>
          {/* SVG icons */}
        </div>
      </nav>
      {isMobile && (
        <ul className='flex flex-col list-none font-semibold m-4'>
          {links.map((link) => (
            <li key={link} className='pb-2 hover:underline decoration-wavy underline-offset-4 transition duration-300 ease-in-out'>
              <a href='#' className='text-black no-underline'>{link}</a>
            </li>
          ))}
        </ul>
      )}
      <div className='w-screen border-t' />
    </div>
  );
}
