import { SectionTitleProps } from '@/types';

export default function SectionTitle({ title, subtitle, alignment = 'center' }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl font-bold tracking-widest text-slate-800 mb-2 italic">
        {title}
      </h2>
      <p className="text-sm text-gray-500 tracking-wider">
        {subtitle}
      </p>
    </div>
  );
}
