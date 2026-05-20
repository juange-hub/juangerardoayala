import { useState } from "react";
import { Camera } from "lucide-react";
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

interface GalleryPhoto {
  thumb: string;
  full: string;
  alt: string;
}

// Orden visual: alterna blanco y negro / color, panorámicas y verticales,
// para un ritmo natural sin necesidad de categorías.
const photos: GalleryPhoto[] = [
  { thumb: g7343_800, full: g7343_1400, alt: "Juan Gerardo Ayala con flauta en el teatro, blanco y negro" },
  { thumb: g7691_800, full: g7691_1400, alt: "Retrato profesional con flauta junto a ventanal" },
  { thumb: g7592_800, full: g7592_1400, alt: "Interpretación de flauta en sala de conciertos, blanco y negro" },
  { thumb: g7746_800, full: g7746_1400, alt: "Flautista tocando junto a escalera, blanco y negro" },
  { thumb: g7700_800, full: g7700_1400, alt: "Retrato sonriente con flauta apoyada al hombro" },
  { thumb: g7662_800, full: g7662_1400, alt: "Flautista interpretando junto a estructura metálica, blanco y negro" },
  { thumb: g7687_800, full: g7687_1400, alt: "Retrato sonriente con flauta vertical" },
  { thumb: g7673_800, full: g7673_1400, alt: "Retrato profesional apoyado en barandal con flauta" },
];

export const Gallery = () => {
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Galería
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Momentos en escena
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una mirada visual a mi trabajo como flautista y director de orquesta.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance] max-w-6xl mx-auto">
          {photos.map((photo, idx) => (
            <button
              key={photo.thumb}
              type="button"
              onClick={() => setLightbox(photo)}
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

      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-0">
          <DialogTitle className="sr-only">{lightbox?.alt ?? "Foto"}</DialogTitle>
          {lightbox && (
            <img
              src={lightbox.full}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
