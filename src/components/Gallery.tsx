import { useState, useEffect, useRef } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import g7343_800 from "@/assets/gallery/DSC_7343-800.jpg";
import g7343_1400 from "@/assets/gallery/DSC_7343-1400.jpg";
import g7691_800 from "@/assets/gallery/DSC_7691-800.jpg";
import g7691_1400 from "@/assets/gallery/DSC_7691-1400.jpg";
import g7592_800 from "@/assets/gallery/DSC_7592-800.jpg";
import g7592_1400 from "@/assets/gallery/DSC_7592-1400.jpg";
import g7746_800 from "@/assets/gallery/DSC_7746-800.jpg";
import g7746_1400 from "@/assets/gallery/DSC_7746-1400.jpg";
import g7700_800 from "@/assets/gallery/DSC_7700-800.jpg";
import g7700_1400 from "@/assets/gallery/DSC_7700-1400.jpg";
import g7662_800 from "@/assets/gallery/DSC_7662-800.jpg";
import g7662_1400 from "@/assets/gallery/DSC_7662-1400.jpg";
import g7687_800 from "@/assets/gallery/DSC_7687-800.jpg";
import g7687_1400 from "@/assets/gallery/DSC_7687-1400.jpg";
import g7673_800 from "@/assets/gallery/DSC_7673-800.jpg";
import g7673_1400 from "@/assets/gallery/DSC_7673-1400.jpg";
import g7322_800 from "@/assets/gallery/DSC_7322-800.jpg";
import g7322_1400 from "@/assets/gallery/DSC_7322-1400.jpg";
import g7333_800 from "@/assets/gallery/DSC_7333-2-800.jpg";
import g7333_1400 from "@/assets/gallery/DSC_7333-2-1400.jpg";
import g7441_800 from "@/assets/gallery/DSC_7441-800.jpg";
import g7441_1400 from "@/assets/gallery/DSC_7441-1400.jpg";
import g7802_800 from "@/assets/gallery/DSC_7802-800.jpg";
import g7802_1400 from "@/assets/gallery/DSC_7802-1400.jpg";
import g7805_800 from "@/assets/gallery/DSC_7805-800.jpg";
import g7805_1400 from "@/assets/gallery/DSC_7805-1400.jpg";
import g7884_800 from "@/assets/gallery/DSC_7884-800.jpg";
import g7884_1400 from "@/assets/gallery/DSC_7884-1400.jpg";
import g7898_800 from "@/assets/gallery/DSC_7898-800.jpg";
import g7898_1400 from "@/assets/gallery/DSC_7898-1400.jpg";
import g7921_800 from "@/assets/gallery/DSC_7921-800.jpg";
import g7921_1400 from "@/assets/gallery/DSC_7921-1400.jpg";
import g7878_800 from "@/assets/gallery/DSC_7878-2-800.jpg";
import g7878_1400 from "@/assets/gallery/DSC_7878-2-1400.jpg";
import g7882_800 from "@/assets/gallery/DSC_7882-800.jpg";
import g7882_1400 from "@/assets/gallery/DSC_7882-1400.jpg";

interface GalleryPhoto {
  thumb: string;
  full: string;
  alt: string;
}

// Orden: primero todas las fotos como flautista, luego como director de orquesta.
const photos: GalleryPhoto[] = [
  // Flautista
  { thumb: g7343_800, full: g7343_1400, alt: "Juan Gerardo Ayala con flauta en el teatro, blanco y negro" },
  { thumb: g7322_800, full: g7322_1400, alt: "Flautista en el teatro con saco vino tinto" },
  { thumb: g7691_800, full: g7691_1400, alt: "Retrato profesional con flauta junto a ventanal" },
  { thumb: g7333_800, full: g7333_1400, alt: "Flautista sosteniendo la flauta en alto en sala de conciertos" },
  { thumb: g7592_800, full: g7592_1400, alt: "Interpretación de flauta en sala de conciertos, blanco y negro" },
  { thumb: g7700_800, full: g7700_1400, alt: "Retrato sonriente con flauta apoyada al hombro" },
  { thumb: g7441_800, full: g7441_1400, alt: "Flautista sonriente entre butacas del teatro" },
  { thumb: g7746_800, full: g7746_1400, alt: "Flautista tocando junto a escalera, blanco y negro" },
  { thumb: g7662_800, full: g7662_1400, alt: "Flautista interpretando junto a estructura metálica, blanco y negro" },
  { thumb: g7687_800, full: g7687_1400, alt: "Retrato sonriente con flauta vertical" },
  { thumb: g7673_800, full: g7673_1400, alt: "Retrato profesional apoyado en barandal con flauta" },
  // Director de orquesta
  { thumb: g7898_800, full: g7898_1400, alt: "Director sonriente con batuta en posición de inicio" },
  { thumb: g7802_800, full: g7802_1400, alt: "Director con saco negro y corbata morada, brazos cruzados" },
  { thumb: g7884_800, full: g7884_1400, alt: "Director sosteniendo la batuta con ambas manos" },
  { thumb: g7878_800, full: g7878_1400, alt: "Director apoyado en barandal con batuta, blanco y negro" },
  { thumb: g7882_800, full: g7882_1400, alt: "Director de pie con batuta en la mano" },
  { thumb: g7805_800, full: g7805_1400, alt: "Director de perfil con batuta en pose contemplativa" },
  { thumb: g7921_800, full: g7921_1400, alt: "Director marcando con batuta, retrato en blanco y negro" },
];

export const Gallery = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const lightbox = lightboxIdx !== null ? photos[lightboxIdx] : null;

  const goPrev = () =>
    setLightboxIdx((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const goNext = () =>
    setLightboxIdx((i) => (i === null ? i : (i + 1) % photos.length));

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? goPrev : goNext)();
    touchStartX.current = null;
  };

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-flex items-center gap-3">
            <Camera className="w-7 h-7 md:w-8 md:h-8 text-accent" />
            Galería
          </h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance] max-w-6xl mx-auto">
          {photos.map((photo, idx) => (
            <button
              key={photo.thumb}
              type="button"
              onClick={() => setLightboxIdx(idx)}
              className="group relative mb-3 md:mb-4 block w-full overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-accent break-inside-avoid"
              aria-label={`Ver foto: ${photo.alt}`}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading={idx < 4 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightboxIdx(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-0 [&>button]:hidden">
          <DialogTitle className="sr-only">{lightbox?.alt ?? "Foto"}</DialogTitle>
          {lightbox && (
            <div
              className="relative"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={lightbox.full}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[85vh] object-contain select-none"
                draggable={false}
              />
              <button
                type="button"
                onClick={goPrev}
                aria-label="Foto anterior"
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 text-white transition focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Foto siguiente"
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 text-white transition focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx(null)}
                aria-label="Cerrar"
                className="absolute right-3 top-3 flex items-center justify-center w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white transition focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-xs tracking-wide">
                {(lightboxIdx ?? 0) + 1} / {photos.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

    </section>
  );
};
