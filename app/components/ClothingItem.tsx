import React, { ReactNode } from 'react';

type ClothingItemProps = {
  title: string;
  price: string;
  className?: string;
};

export function ClothingItem({ title, price, className }: ClothingItemProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-lg">{price}</p>
    </div>
  );
}
