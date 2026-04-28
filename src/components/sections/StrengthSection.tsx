import SectionTitle from '@/components/elements/SectionTitle';
import { StrengthItem } from '@/types';
import Image from 'next/image';

interface StrengthProps {
  data: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    items: StrengthItem[];
  };
}

export default function StrengthSection({ data }: StrengthProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
          <div className="lg:w-1/3">
            <SectionTitle 
              title={data.sectionTitle} 
              subtitle={data.sectionSubtitle} 
              alignment="left" 
            />
          </div>
          <div className="lg:w-2/3">
             <p className="text-gray-500 text-lg">
              {data.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {data.items.map((item, index) => (
            <div key={item.id} className="relative group">
              <div className="flex items-baseline gap-4 mb-6">
                 <span className="text-5xl font-black text-secondary/20 group-hover:text-secondary/40 transition-colors">
                  {item.number}
                </span>
                <div className="w-12 h-12 relative">
                   <Image src={item.iconPath} alt="" fill className="object-contain" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Assets */}
      <div className="absolute top-1/2 right-[-5%] w-[30%] aspect-square opacity-5 pointer-events-none">
        <Image src="/images/blob_12.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-10 left-10 w-12 h-12">
        <Image src="/images/star_05.png" alt="" fill className="object-contain opacity-20" />
      </div>
    </section>
  );
}
