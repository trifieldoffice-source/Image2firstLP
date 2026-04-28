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
    <section id="strength" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-16 items-start gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <SectionTitle title={data.sectionTitle} subtitle={data.sectionSubtitle} alignment="left" />
            <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">{data.description}</p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
            {data.items.map((item) => (
              <div key={item.id} className="relative pl-0 lg:pl-4">
                <div className="text-5xl font-bold text-secondary/20 absolute -top-8 -left-4 lg:left-0 z-0 select-none">
                  {item.number}
                </div>
                <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-16 h-16 mb-4 relative">
                    {item.iconPath && (
                      <Image src={item.iconPath} alt={item.title} width={64} height={64} className="object-contain" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
