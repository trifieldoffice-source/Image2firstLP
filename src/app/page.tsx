import { LP_DATA } from '@/constants/config';
import HeroSection from '@/components/sections/HeroSection';
import ServiceSection from '@/components/sections/ServiceSection';
import WorksSection from '@/components/sections/WorksSection';
import StrengthSection from '@/components/sections/StrengthSection';
import PriceSection from '@/components/sections/PriceSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection data={LP_DATA.hero} />
      <ServiceSection data={LP_DATA.service} />
      <WorksSection data={LP_DATA.works} />
      <StrengthSection data={LP_DATA.strength} />
      <PriceSection data={LP_DATA.price} />
      <FAQSection data={LP_DATA.faq} />
      <ContactSection data={LP_DATA.contact} />
    </>
  );
}
