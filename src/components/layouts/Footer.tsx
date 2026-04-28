import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Link href="/" className="text-3xl font-bold tracking-wider inline-block">
            BRIGHT
            <span className="block text-xs text-gray-500 font-normal mt-1">DESIGN & WEB</span>
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BRIGHT Design & Web. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
