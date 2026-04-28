import SectionTitle from '@/components/elements/SectionTitle';
import Button from '@/components/elements/Button';
import { WorkItem } from '@/types';
import { ArrowRight } from 'lucide-react';

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
    <section id="works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-12 items-start gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <SectionTitle title={data.sectionTitle} subtitle={data.sectionSubtitle} alignment="left" />
            <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">{data.description}</p>
            
            <div className="mt-8 hidden lg:block">
              <Button href="#works" variant="outline" className="text-sm font-normal py-2 px-6">
                {data.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {data.items.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-3xl mb-4 overflow-hidden relative">
                   {/* Placeholder for works image */}
                   <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                   
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full">
                     {item.category}
                   </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.description}</p>
                <div className="inline-flex items-end text-primary-dark font-bold bg-primary/10 px-4 py-1 rounded-full">
                  <span className="text-xs mr-2">{item.stats.label}</span>
                  <span className="text-xl">{item.stats.value}</span>
                  {item.stats.suffix && <span className="text-xs ml-1 text-secondary">{item.stats.suffix}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center lg:hidden">
          <Button href="#works" variant="outline" className="text-sm font-normal py-2 px-6">
            {data.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
