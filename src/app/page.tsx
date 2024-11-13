import FeaturedCourses from "@/components/FeaturedCourses";
import HearOurHarmony from "@/components/HearOurHarmony";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <HearOurHarmony></HearOurHarmony>

    </main>
  )
}
