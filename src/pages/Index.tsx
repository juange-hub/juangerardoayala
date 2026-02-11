import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TeachingSection } from "@/components/TeachingSection";
import { Bio } from "@/components/Bio";
import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Projects } from "@/components/Projects";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Multimedia } from "@/components/Multimedia";
import { WhyStudy } from "@/components/WhyStudy";
import { Classes } from "@/components/Classes";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TeachingSection />
      <Bio />
      <Experience />
      <Projects />
      <UpcomingEvents />
      <Multimedia />
      <Leadership />
      <WhyStudy />
      <Classes />
      <Footer />
    </div>
  );
};

export default Index;
