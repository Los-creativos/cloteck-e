import { ReactNode, MouseEvent } from 'react'

export default function Button ({
  text,
  className,
  onClick,
  children,
  type
}: {
  text?: String;
  className?: String;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  type?: string;
}) {
  return (
    <button
      className={`bg-black text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
      {children}
    </button>
  )
}
