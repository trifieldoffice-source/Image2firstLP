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
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] aspect-square opacity-20 pointer-events-none">
        <Image src="/images/blob_01.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-[5%] right-[-5%] w-[30%] aspect-square opacity-10 pointer-events-none">
        <Image src="/images/blob_02.png" alt="" fill className="object-contain" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative inline-block mb-6">
              <span className="font-cursive text-3xl lg:text-4xl text-accent-pink -rotate-3 block mb-2">
                {data.subtitle}
              </span>
              <div className="absolute -right-12 -top-4 w-12 h-12">
                <Image src="/images/star_01.png" alt="" fill className="object-contain" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 whitespace-pre-line">
              {data.title}
            </h1>
            
            <p className="text-gray-600 text-lg mb-10 whitespace-pre-line leading-relaxed max-w-xl">
              {data.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {data.features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50 text-center group hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mb-4 relative">
                    <Image src={`/images/icon_0${index + 1}.png`} alt="" fill className="object-contain" />
                  </div>
                  <span className="text-xs font-bold leading-tight">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="relative inline-block">
              <Button href="#contact" variant="primary" className="text-xl px-12 py-6 rounded-full shadow-xl shadow-primary/20">
                <Image src="/images/icon_05.png" alt="" width={24} height={24} className="mr-3" />
                {data.ctaText}
              </Button>
              <div className="absolute -right-20 bottom-0 w-24 h-24 hidden md:block">
                <Image src="/images/arrow_01.png" alt="" fill className="object-contain" />
              </div>
            </div>
          </div>
          
          {/* Right Visuals */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/5] max-w-[600px] mx-auto">
              {/* Main Large Photo */}
              <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: 'url(#blobMask1)' }}>
                <div className="relative w-full h-full bg-gray-200">
                   <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" fill className="object-cover" />
                </div>
              </div>
              
              {/* Secondary Photo 1 */}
              <div className="absolute -left-10 bottom-10 w-1/2 aspect-square z-20 border-8 border-white rounded-full overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" alt="Office" fill className="object-cover" />
              </div>
              
              {/* Secondary Photo 2 */}
              <div className="absolute -right-8 top-10 w-2/5 aspect-square z-0 opacity-80 pointer-events-none">
                 <Image src="/images/blob_03.png" alt="" fill className="object-contain" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-10 bottom-1/4 w-48 h-48 bg-secondary rounded-full flex items-center justify-center text-white text-center shadow-2xl z-30 floating p-6">
                <p className="font-bold text-sm leading-relaxed">
                  {data.badgeText}
                </p>
                <div className="absolute -bottom-4 -left-4 w-12 h-12">
                   <Image src="/images/star_02.png" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* SVG mask for the blob shape - can be refined with actual blob assets */}
            <svg width="0" height="0">
              <defs>
                <clipPath id="blobMask1" clipPathUnits="objectBoundingBox">
                  <path d="M0.85,0.2 C0.95,0.4 0.9,0.7 0.75,0.85 C0.6,0.95 0.3,0.95 0.15,0.8 C0.05,0.65 0.05,0.35 0.2,0.15 C0.35,0.05 0.65,0.05 0.85,0.2" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
