import SectionTitle from '@/components/elements/SectionTitle';
import { PricePlan } from '@/types';

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
    <section id="price" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-16 items-start gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <SectionTitle title={data.sectionTitle} subtitle={data.sectionSubtitle} alignment="left" />
            <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">{data.description}</p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-end">
            {data.plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-3xl border ${plan.isPopular ? 'border-primary shadow-lg relative transform lg:-translate-y-4' : 'border-gray-200 shadow-sm'} p-8 text-center flex flex-col h-full`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-slate-800 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    人気No.1
                  </div>
                )}
                
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-6 pb-6 border-b border-gray-100">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-3xl font-bold">¥{plan.price}</span>
                  <span className="text-sm text-gray-500">~</span>
                </div>
                
                <ul className="text-sm text-left space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
