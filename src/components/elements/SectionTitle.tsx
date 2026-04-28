interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, alignment = 'center' }: SectionTitleProps) {
  return (
    <div className={`relative mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">
        {title}
      </h2>
      <div className={`h-1 w-12 bg-secondary mb-4 ${alignment === 'center' ? 'mx-auto' : ''}`} />
      <p className="text-gray-400 text-sm font-bold tracking-[0.2em]">
        {subtitle}
      </p>
    </div>
  );
}
