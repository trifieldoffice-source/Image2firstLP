'use client';

import { useState } from 'react';
import SectionTitle from '@/components/elements/SectionTitle';
import Button from '@/components/elements/Button';
import { FaqItem } from '@/types';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FaqProps {
  data: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    ctaText: string;
    items: FaqItem[];
  };
}

export default function FAQSection({ data }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-12 items-start gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <SectionTitle title={data.sectionTitle} subtitle={data.sectionSubtitle} alignment="left" />
            <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">{data.description}</p>
            
            <div className="mt-8 hidden lg:block">
              <Button href="#faq" variant="outline" className="text-sm font-normal py-2 px-6 bg-transparent">
                {data.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <div className="space-y-4">
              {data.items.map((item, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <div className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-accent-pink/20 text-accent-pink flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          Q
                        </span>
                        <span className="font-bold text-slate-800">{item.question}</span>
                      </div>
                      <div className="text-gray-400 flex-shrink-0 ml-4">
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`px-6 pb-5 pt-0 transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden py-0'
                      }`}
                    >
                      <div className="pl-12 flex items-start">
                        <span className="text-gray-600 text-sm leading-relaxed">{item.answer}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center lg:hidden">
          <Button href="#faq" variant="outline" className="text-sm font-normal py-2 px-6 bg-transparent">
            {data.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
