import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-concierto.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-8 md:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in">
          Juan Gerardo Ayala
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Flautista Solista y Director de Orquesta
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]"
            onClick={() => scrollToSection("clases")}
          >
            Ver Clases
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-[var(--transition-smooth)]"
            onClick={() => scrollToSection("bio")}
          >
            Conocer Más
          </Button>
        </div>
      </div>
    </section>
  );
};
