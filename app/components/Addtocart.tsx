import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Addtocart: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
    color="#F5C9A4"
      className={`py-2 px-4 font-bold text-black border border-black hover:bg-orange-400 square ${className}`}
    >
      {children}
    </button>
  );
};

export default Addtocart;