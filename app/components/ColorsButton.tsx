import React from 'react';

interface ButtonProps {
  color: string;
  className?: string;
}

const ColorsButton: React.FC<ButtonProps> = ({ color, className }) => {
  return (
    <button
      className={`bg-${color} w-8 h-8 border border-black hover:bg-${color}-700 rounded-full ${className}`}
      style={{ backgroundColor: color }}
    >
    </button>
  );
};

export default ColorsButton;
