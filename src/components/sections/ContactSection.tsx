import Button from '@/components/elements/Button';
import { Send } from 'lucide-react';
import Image from 'next/image';

interface ContactProps {
  data: {
    title: string;
    description: string;
    ctaText: string;
  };
}

export default function ContactSection({ data }: ContactProps) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="bg-secondary/10 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="absolute top-[-20%] right-[-10%] w-2/3 aspect-square opacity-10 pointer-events-none">
             <Image src="/images/blob_16.png" alt="" fill className="object-contain" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Person Image */}
            <div className="w-full lg:w-1/3 relative">
               <div className="relative aspect-square w-full max-w-[300px] mx-auto overflow-hidden" style={{ clipPath: 'url(#blobMask3)' }}>
                  <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" alt="Consultant" fill className="object-cover" />
               </div>
               {/* Handwritten style badge */}
               <div className="absolute -right-4 -top-4 bg-white px-4 py-2 rounded-full shadow-lg rotate-12">
                  <span className="text-[10px] font-black text-secondary">まずは、お気軽に！</span>
               </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 whitespace-pre-line leading-tight">
                {data.title}
              </h2>
              <p className="text-gray-600 mb-10 whitespace-pre-line text-sm leading-relaxed">
                {data.description}
              </p>
              <div className="relative inline-block">
                <Button href="#contact-form" variant="primary" className="text-lg px-12 py-5 shadow-2xl shadow-primary/30">
                  <Image src="/images/icon_10.png" alt="" width={20} height={20} className="mr-3" />
                  {data.ctaText}
                </Button>
                <div className="absolute -left-12 -top-8 w-16 h-16 opacity-30">
                   <Image src="/images/star_08.png" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* Mockups/Visuals */}
            <div className="w-full lg:w-1/3 relative">
               <div className="relative w-full aspect-square">
                  <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-white rounded-3xl shadow-2xl overflow-hidden rotate-3">
                     <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Website Mockup" fill className="object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-white rounded-2xl shadow-2xl overflow-hidden -rotate-6 border-4 border-white">
                     <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" alt="Mobile Mockup" fill className="object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <clipPath id="blobMask3" clipPathUnits="objectBoundingBox">
            <path d="M0.8,0.2 C0.95,0.4 0.95,0.7 0.8,0.85 C0.65,1 0.35,1 0.2,0.85 C0.05,0.7 0.05,0.4 0.2,0.2 C0.35,0 0.65,0 0.8,0.2" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}
