import { Hero } from "@/components/Hero";
import { Bio } from "@/components/Bio";
import { Experience } from "@/components/Experience";
import { Multimedia } from "@/components/Multimedia";
import { Classes } from "@/components/Classes";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Bio />
      <Experience />
      <Multimedia />
      <Classes />
      <Footer />
    </div>
  );
};

export default Index;
