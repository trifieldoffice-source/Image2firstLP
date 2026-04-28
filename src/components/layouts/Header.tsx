import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            BRIGHT
            <span className="block text-[10px] text-gray-500 font-normal">DESIGN & WEB</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#service" className="hover:text-primary transition-colors">SERVICE</Link>
          <Link href="#works" className="hover:text-primary transition-colors">WORKS</Link>
          <Link href="#strength" className="hover:text-primary transition-colors">STRENGTH</Link>
          <Link href="#price" className="hover:text-primary transition-colors">PRICE</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>
        
        <Link 
          href="#contact" 
          className="hidden md:flex items-center justify-center bg-accent-pink text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          <span className="mr-2">✉</span> 無料相談・お見積り
        </Link>
      </div>
    </header>
  );
}
