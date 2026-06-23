import { HeroScene } from "@/components/sections/HeroScene";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { MemoryComposition } from "@/components/sections/MemoryComposition";
import { LivingGallery } from "@/components/sections/LivingGallery";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { DateInquirySection } from "@/components/sections/DateInquirySection";
import { ClosingSection } from "@/components/sections/ClosingSection";



export default function Home() {
  return (
    <main>
      <HeroScene />
       <ManifestoSection />
       <MemoryComposition />
       <LivingGallery />
       <ExperiencesSection />
       <DateInquirySection />
       <ClosingSection />
    </main>
  );
}