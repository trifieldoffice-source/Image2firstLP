import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md";
  
  const variants = {
    primary: "bg-primary text-slate-800 hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    accent: "bg-accent-pink text-white hover:bg-opacity-90",
    outline: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-slate-800",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
