import { ReactNode } from 'react'

export default function Button ({
  text,
  className,
  onClick,
  children,
  type
}: {
  text?: String;
  className?: String;
  onClick?: () => void;
  children?: ReactNode;
  type?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
      {children}
    </button>
  )
}
