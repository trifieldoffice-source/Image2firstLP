import SectionTitle from '@/components/elements/SectionTitle';
import { PricePlan } from '@/types';
import Image from 'next/image';

interface PriceProps {
  data: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    plans: PricePlan[];
  };
}

export default function PriceSection({ data }: PriceProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#fafafa]">
      <div className="container">
        <div className="text-center mb-16">
          <SectionTitle 
            title={data.sectionTitle} 
            subtitle={data.sectionSubtitle} 
          />
          <p className="text-gray-500 whitespace-pre-line mt-4">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {data.plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white p-10 rounded-[2.5rem] shadow-sm border ${plan.isPopular ? 'border-primary border-2' : 'border-gray-50'} flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary rounded-full text-white text-xs font-black tracking-widest shadow-lg shadow-primary/20">
                  人気No.1
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className="text-[10px] text-gray-400 font-bold mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm font-bold text-dark">¥</span>
                  <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-sm font-bold text-dark">〜</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-xs text-gray-600 font-medium">
                    <div className="w-4 h-4 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full text-xs font-black tracking-widest transition-all ${plan.isPopular ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                選択する
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Assets */}
      <div className="absolute bottom-0 right-0 w-1/3 aspect-square opacity-10 pointer-events-none">
         <div className="relative w-full h-full">
            <Image src="/images/blob_14.png" alt="" fill className="object-contain" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
         </div>
      </div>
      <div className="absolute top-1/2 left-[-5%] w-48 h-48 opacity-10 rotate-45">
         <Image src="/images/star_06.png" alt="" fill className="object-contain" />
      </div>
    </section>
  );
}
