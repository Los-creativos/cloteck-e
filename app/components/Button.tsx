export default function Button ({text, className, onClick, children, type}: {text?:String, className?:String, onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void, children?: React.ReactNode, type?: string} ) {
  return (
    <button className={`bg-black text-white font-bold py-2 px-4 rounded ${className}`}>
      {text}
      {children}
    </button>
  )
}