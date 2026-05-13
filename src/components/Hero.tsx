import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFlauta2 from "@/assets/hero-flauta-2.jpg";
import heroFlauta2_640 from "@/assets/hero-flauta-2-640.jpg";
import heroFlauta2_1024 from "@/assets/hero-flauta-2-1024.jpg";
import heroFlauta2_1600 from "@/assets/hero-flauta-2-1600.jpg";
import heroFlauta3 from "@/assets/hero-flauta-3.jpg";
import heroFlauta3_640 from "@/assets/hero-flauta-3-640.jpg";
import heroFlauta3_1024 from "@/assets/hero-flauta-3-1024.jpg";
import heroFlauta3_1600 from "@/assets/hero-flauta-3-1600.jpg";
import heroFlauta4 from "@/assets/hero-flauta-4.jpg";
import heroFlauta4_640 from "@/assets/hero-flauta-4-640.jpg";
import heroFlauta4_1024 from "@/assets/hero-flauta-4-1024.jpg";
import heroFlauta4_1600 from "@/assets/hero-flauta-4-1600.jpg";
import heroFlauta5 from "@/assets/hero-flauta-5.jpg";
import heroFlauta5_640 from "@/assets/hero-flauta-5-640.jpg";
import heroFlauta5_1024 from "@/assets/hero-flauta-5-1024.jpg";
import heroFlauta5_1600 from "@/assets/hero-flauta-5-1600.jpg";

const buildSrcSet = (s640: string, s1024: string, s1600: string) =>
  `${s640} 640w, ${s1024} 1024w, ${s1600} 1600w`;

const slides = [
  {
    src: heroFlauta2,
    srcSet: buildSrcSet(heroFlauta2_640, heroFlauta2_1024, heroFlauta2_1600),
    alt: "Juan Gerardo Ayala como flautista solista",
  },
  {
    src: heroFlauta3,
    srcSet: buildSrcSet(heroFlauta3_640, heroFlauta3_1024, heroFlauta3_1600),
    alt: "Juan Gerardo Ayala saludando al público tras concierto",
  },
  {
    src: heroFlauta4,
    srcSet: buildSrcSet(heroFlauta4_640, heroFlauta4_1024, heroFlauta4_1600),
    alt: "Juan Gerardo Ayala interpretando flauta solista con orquesta",
  },
  {
    src: heroFlauta5,
    srcSet: buildSrcSet(heroFlauta5_640, heroFlauta5_1024, heroFlauta5_1600),
    alt: "Juan Gerardo Ayala como solista en escenario con orquesta sinfónica",
  },
];

const SLIDE_SIZES = "(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1600px";
const SLIDE_DURATION = 6000;

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goTo = (idx: number) =>
    setCurrent(((idx % slides.length) + slides.length) % slides.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [isPaused, current]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsPaused(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current > threshold) prev();
    else if (touchDeltaX.current < -threshold) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setIsPaused(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-4 md:pb-16 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
                srcSet={slide.srcSet}
                sizes={SLIDE_SIZES}
                alt={slide.alt}
                className="w-full h-full object-top object-cover"
                fetchPriority={idx === 0 ? "high" : "low"}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Imagen anterior"
        className="hidden lg:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Siguiente imagen"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

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
