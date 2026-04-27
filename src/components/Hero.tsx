import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroDirector from "@/assets/hero-director.jpg";
import heroFlauta1 from "@/assets/hero-flauta-1.jpg";
import heroFlauta2 from "@/assets/hero-flauta-2.jpg";
import heroFlauta3 from "@/assets/hero-flauta-3.jpg";

const slides = [
  { src: heroDirector, alt: "Juan Gerardo Ayala - Director de Orquesta", fit: "contain" as const },
  { src: heroFlauta1, alt: "Juan Gerardo Ayala interpretando flauta con orquesta", fit: "cover" as const },
  { src: heroFlauta2, alt: "Juan Gerardo Ayala como flautista solista", fit: "cover" as const },
  { src: heroFlauta3, alt: "Juan Gerardo Ayala saludando al público tras concierto", fit: "cover" as const },
];

const SLIDE_DURATION = 4500;

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-8 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="h-full relative bg-primary"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain md:object-cover object-top"
                fetchPriority={idx === 0 ? "high" : "low"}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in">
          Juan Gerardo Ayala
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Flautista y Director de Orquesta
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

        <div className="flex justify-center gap-2" role="tablist" aria-label="Galería del hero">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir a imagen ${idx + 1}`}
              aria-selected={current === idx}
              role="tab"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? "w-8 bg-primary-foreground" : "w-4 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
