import { Hero } from "@/components/Hero";
import { Bio } from "@/components/Bio";
import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Projects } from "@/components/Projects";
import { CommunityOrchestraCard } from "@/components/CommunityOrchestraCard";
import { Multimedia } from "@/components/Multimedia";
import { WhyStudy } from "@/components/WhyStudy";
import { Classes } from "@/components/Classes";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Bio />
      <Experience />
      <Leadership />
      <Projects />
      <CommunityOrchestraCard />
      <Multimedia />
      <WhyStudy />
      <Classes />
      <Footer />
    </div>
  );
};

export default Index;
