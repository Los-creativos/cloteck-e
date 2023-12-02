import { ReactNode, useEffect, useRef, useState } from 'react';

export default function Dropdown({ children, classnameButton, text, buttonChildren, className }: { children: ReactNode; classnameButton?: string; text?: string, buttonChildren?: ReactNode, className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative inline-block" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={`bg-slate-300 bg-opacity-50 gap-2 w-full text-left hover:bg-slate-400 hover:bg-opacity-50 ${classnameButton}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {buttonChildren}
          {text}
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 mt-2 p-2 w-full shadow-lg rounded-md border bg-gray-300 border-gray-300 md:max-h-[9rem] max-h-32 overflow-y-auto ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
