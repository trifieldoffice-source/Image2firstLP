import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const navItems = [
    { label: 'SERVICE', href: '#service' },
    { label: 'WORKS', href: '#works' },
    { label: 'STRENGTH', href: '#strength' },
    { label: 'PRICE', href: '#price' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-50">
      <div className="container h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-40 h-10">
             {/* Logo text style matching image */}
             <div className="font-black text-2xl tracking-tighter text-dark">
                BRIGHT
                <div className="text-[8px] tracking-[0.4em] font-medium -mt-1 text-gray-400">DESIGN & WEB</div>
             </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="text-[10px] font-black tracking-widest text-gray-500 hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="#contact" 
            className="hidden sm:flex items-center gap-2 bg-accent-pink text-white px-6 py-3 rounded-full text-[10px] font-black tracking-widest hover:bg-accent-pink/90 transition-all shadow-lg shadow-accent-pink/20"
          >
             <div className="w-4 h-4 relative">
                <Image src="/images/icon_10.png" alt="" fill className="object-contain" />
             </div>
             無料相談・お見積り
          </Link>
        </div>
      </div>
    </header>
  );
}
