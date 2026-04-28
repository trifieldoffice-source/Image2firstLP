import SectionTitle from '@/components/elements/SectionTitle';
import Button from '@/components/elements/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { WorkItem } from '@/types';

interface WorksProps {
  data: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    ctaText: string;
    items: WorkItem[];
  };
}

export default function WorksSection({ data }: WorksProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#fdfdfd]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start lg:items-end">
          <div className="lg:w-1/3">
            <SectionTitle 
              title={data.sectionTitle} 
              subtitle={data.sectionSubtitle} 
              alignment="left" 
            />
          </div>
          <div className="lg:w-2/3">
            <p className="text-gray-500 whitespace-pre-line text-lg mb-6">
              {data.description}
            </p>
            <div className="relative inline-block">
               <Button href="#works" variant="outline" className="group">
                {data.ctaText}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="absolute -right-16 -top-8 w-16 h-16 pointer-events-none">
                 <Image src="/images/star_04.png" alt="" fill className="object-contain opacity-40" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Photo with Blob mask or rounded corners */}
                <div className="absolute inset-0 bg-gray-100">
                   <Image 
                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600`} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-wider text-secondary">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[10px] font-bold text-gray-500">{item.stats.label}</span>
                  <span className="text-xl font-black text-secondary">{item.stats.value}</span>
                  <span className="text-[10px] font-bold text-secondary">{item.stats.suffix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[20%] aspect-square opacity-5">
         <Image src="/images/blob_10.png" alt="" fill className="object-contain" />
      </div>
    </section>
  );
}
