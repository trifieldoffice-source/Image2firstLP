'use client';

import { useState } from 'react';
import SectionTitle from '@/components/elements/SectionTitle';
import { FaqItem } from '@/types';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface FAQProps {
  data: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    ctaText: string;
    items: FaqItem[];
  };
}

export default function FAQSection({ data }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-3/5">
            <SectionTitle 
              title={data.sectionTitle} 
              subtitle={data.sectionSubtitle} 
              alignment="left" 
            />
            <p className="text-gray-500 mb-12 whitespace-pre-line text-lg">
              {data.description}
            </p>

            <div className="space-y-4 mb-12">
              {data.items.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#fafafa] rounded-2xl overflow-hidden transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <button 
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors ${openIndex === index ? 'bg-secondary' : 'bg-accent-pink opacity-50'}`}>
                        Q
                      </div>
                      <span className="font-bold text-dark">{item.question}</span>
                    </div>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-secondary" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-300 group-hover:text-secondary transition-colors" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-24 pb-8 text-gray-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="text-secondary font-black tracking-widest text-xs flex items-center group">
              {data.ctaText}
              <div className="ml-4 w-10 h-[1px] bg-secondary group-hover:w-16 transition-all" />
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="w-full lg:w-2/5 relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
               {/* Large Person Image with Blob Mask */}
               <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: 'url(#blobMask2)' }}>
                  <div className="relative w-full h-full bg-gray-100">
                    <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" alt="Consultant" fill className="object-cover" />
                  </div>
               </div>
               
               {/* Decorative Blobs */}
               <div className="absolute -left-10 bottom-0 w-1/2 aspect-square z-0 opacity-20">
                  <Image src="/images/blob_15.png" alt="" fill className="object-contain" />
               </div>
               <div className="absolute -right-4 top-1/4 w-32 h-32 z-20">
                  <Image src="/images/star_07.png" alt="" fill className="object-contain" />
               </div>
            </div>

            <svg width="0" height="0">
              <defs>
                <clipPath id="blobMask2" clipPathUnits="objectBoundingBox">
                  <path d="M0.2,0.15 C0.05,0.35 0.05,0.65 0.15,0.8 C0.3,0.95 0.7,0.95 0.85,0.8 C0.95,0.65 0.95,0.35 0.8,0.15 C0.65,0.05 0.35,0.05 0.2,0.15" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
