import Image from 'next/image';
import Button from '@/components/elements/Button';
import { Send } from 'lucide-react';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    ctaText: string;
    badgeText: string;
  };
}

export default function HeroSection({ data }: HeroProps) {
  return (
    <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 z-10">
          <div className="inline-block px-4 py-1 bg-white/50 backdrop-blur-sm rounded-full mb-6">
            <span className="text-secondary font-bold italic tracking-wider">{data.subtitle}</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 whitespace-pre-line text-slate-800">
            {data.title}
          </h1>
          
          <p className="text-gray-600 mb-8 whitespace-pre-line leading-relaxed">
            {data.description}
          </p>
          
          <ul className="mb-10 space-y-4">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-center bg-white shadow-sm rounded-full py-3 px-6 w-max border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center mr-3 text-xs">
                  ✓
                </div>
                <span className="font-medium text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button href="#contact" variant="primary" className="text-lg px-10 py-5">
            <Send className="w-5 h-5 mr-2" />
            {data.ctaText}
          </Button>
        </div>
        
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0">
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* The main hero visual would normally go here. Using a placeholder structure */}
            <div className="absolute inset-0 bg-secondary/10 rounded-full" />
            
            {/* Floating Badge */}
            <div className="absolute -right-4 top-1/4 w-48 h-48 bg-secondary rounded-full flex items-center justify-center text-white text-center shadow-xl rotate-12 z-20">
              <p className="font-bold whitespace-pre-line text-sm leading-relaxed -rotate-12">
                {data.badgeText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
