'use client'
import React, { useState } from 'react';

const trends = [
  { id: 1, text: 'Product 1', bg: 'bg-gradient-to-r from-teal-400 to-blue-500' },
  { id: 2, text: 'Product 2', bg: 'bg-gradient-to-r from-purple-400 to-pink-500' },
  { id: 3, text: 'Product 3', bg: 'bg-gradient-to-r from-green-400 to-blue-500' },
];

const TrendCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? trends.length - 1 : prevIndex - 1);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => prevIndex === trends.length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <div className="relative">
      <div className={`animated-bg ${trends[activeIndex].bg} h-64 flex items-center justify-center`}>
        {/* Text and Button */}
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-4">{trends[activeIndex].text}</h2>
          <button className="bg-white text-gray-800 px-6 py-2 rounded shadow button-hover-effect">
            Shop Now
          </button>
        </div>
      </div>
      {/* Navigation Buttons */}
      <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition duration-300">
        &#8592; {/* Left arrow */}
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition duration-300">
        &#8594; {/* Right arrow */}
      </button>

      <div className="absolute bottom-0 left-0 w-full flex justify-center p-4">
        {trends.map((trend, index) => (
          <div key={trend.id} className={`h-2 w-2 mx-1 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
};

export default TrendCarousel;
