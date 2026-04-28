import Button from '@/components/elements/Button';
import { Send } from 'lucide-react';

interface ContactProps {
  data: {
    title: string;
    description: string;
    ctaText: string;
  };
}

export default function ContactSection({ data }: ContactProps) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/20 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-xl border border-white">
          <div className="inline-block px-4 py-1 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-sm font-bold text-gray-500">まずはお気軽に！</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            {data.title}
          </h2>
          
          <p className="text-gray-600 mb-10 whitespace-pre-line leading-relaxed">
            {data.description}
          </p>
          
          <Button href="#form" variant="primary" className="text-lg px-12 py-5 shadow-lg shadow-primary/30 w-full md:w-auto">
            <Send className="w-5 h-5 mr-2" />
            {data.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
