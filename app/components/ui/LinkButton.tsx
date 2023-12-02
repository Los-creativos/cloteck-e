import Link from 'next/link';
import { ReactNode } from 'react'

export default function LinkButton ({
  text,
  className,
  onClick,
  children,
  type,
  href
}: {
  text?: String;
  className?: String;
  onClick?: () => void;
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  href?: string
}) {
  return (
    <Link href={`${href}`}>
      <button
        type={type}
        onClick={onClick}
        className={`font-bold py-2 px-4 rounded ${className}`}
        >
        {text}
        {children}
      </button>
    </Link>
  )
}
