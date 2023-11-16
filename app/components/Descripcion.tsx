import React, { ReactNode } from 'react';

type Descripcion = {
  descripcion: string;
  className?: string;
};

export function Descripcion({ descripcion,  className }: Descripcion) {
  const truncatedTitle = descripcion.length > 500 ? `${descripcion.substring(0, 500)}...` : descripcion;

  return (
    <div className={`${className}`}>
      <h2 className="text-xl font-bold mb-2">{truncatedTitle}</h2>
    </div>
  );
}
