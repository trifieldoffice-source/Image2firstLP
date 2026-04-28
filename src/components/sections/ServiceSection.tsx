import SectionTitle from '@/components/elements/SectionTitle';
import { ServiceItem } from '@/types';
import Image from 'next/image';

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
    <section id="service" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-16 items-start gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <SectionTitle title={data.sectionTitle} subtitle={data.sectionSubtitle} alignment="left" />
            <p className="text-gray-600 mt-4 leading-relaxed">{data.description}</p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {data.items.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group">
                <div className={`w-24 h-24 mb-6 relative flex items-center justify-center bg-blob-${item.iconType || 'secondary'} transition-transform group-hover:scale-110 duration-500`}>
                  {/* Using an img tag since we know we copied the files, but the specific names might vary. */}
                  {item.iconPath && (
                    <Image src={item.iconPath} alt={item.title} width={48} height={48} className="object-contain" />
                  )}
                </div>
                <h3 className="text-xl font-bold tracking-wider mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{item.subtitle}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
