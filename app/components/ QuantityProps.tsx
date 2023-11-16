import React, { useState } from 'react';

interface QuantityProps {
  onIncrement: () => void;
  onDecrement: () => void;
  quantity: number;
}

const Quantity: React.FC<QuantityProps> = ({ onIncrement, onDecrement, quantity }) => {
  return (
    <div className="mb-2 font-bold">
      Quantity:
      <div className="flex items-center space-x-2">
        <button onClick={onDecrement} className="border border-black px-2">-</button>
        <span>{quantity}</span>
        <button onClick={onIncrement} className="border border-black px-2">+</button>
      </div>
    </div>
  );
};

export default Quantity;