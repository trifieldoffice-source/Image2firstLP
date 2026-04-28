import SectionTitle from '@/components/elements/SectionTitle';
import Image from 'next/image';

import { ServiceItem } from '@/types';

interface ServiceProps {
  data: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    items: ServiceItem[];
  };
}

export default function ServiceSection({ data }: ServiceProps) {
  return (
    <section className="py-24 bg-white/30 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-end">
          <div className="lg:w-1/3">
             <SectionTitle 
              title={data.sectionTitle} 
              subtitle={data.sectionSubtitle} 
              alignment="left" 
            />
          </div>
          <div className="lg:w-2/3">
            <p className="text-gray-600 max-w-2xl text-lg">
              {data.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => (
            <div key={item.id} className="relative group p-8 flex flex-col items-center text-center">
              {/* Organic Background Blob */}
              <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src={item.blobPath || `/images/blob_${(index % 4) + 1}.png`} 
                  alt="" 
                  fill 
                  className="object-contain opacity-20"
                />
              </div>

              {/* Icon Container */}
              <div className="w-32 h-32 mb-8 relative z-10 flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full bg-white shadow-lg shadow-gray-100 group-hover:shadow-xl transition-shadow" />
                 <div className="relative w-16 h-16">
                    <Image src={item.iconPath} alt={item.title} fill className="object-contain" />
                 </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 tracking-tighter">{item.title}</h3>
                <p className="text-secondary font-bold text-sm mb-4">{item.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative stars/blobs */}
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-20">
        <Image src="/images/blob_05.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-1/2 left-4 w-8 h-8 opacity-40">
        <Image src="/images/star_03.png" alt="" fill className="object-contain" />
      </div>
    </section>
  );
}
