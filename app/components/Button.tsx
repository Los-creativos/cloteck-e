import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`bg-orange py-2 px-4 font-bold text-black border border-black hover:bg-orange-400  square ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;