import { useState } from "react";
import { Camera } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type GalleryCategory = "flautista" | "director";

interface GalleryPhoto {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
}

// Las fotos se irán agregando aquí. Cada una con su categoría.
// Ejemplo:
// { src: "/images/galeria/concierto-01.jpg", alt: "Concierto en el Teatro Nacional", category: "flautista" },
const photos: GalleryPhoto[] = [];

const filterPhotos = (cat: "todas" | GalleryCategory) =>
  cat === "todas" ? photos : photos.filter((p) => p.category === cat);

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
            Una mirada visual a mi trayectoria como flautista y director de orquesta.
          </p>
        </div>

        <Tabs defaultValue="todas" className="w-full">
          <TabsList className="mx-auto mb-10 flex w-fit">
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="flautista">Flautista</TabsTrigger>
            <TabsTrigger value="director">Director</TabsTrigger>
          </TabsList>

          {(["todas", "flautista", "director"] as const).map((cat) => {
            const list = filterPhotos(cat);
            return (
              <TabsContent key={cat} value={cat}>
                {list.length === 0 ? (
                  <div className="border border-dashed border-border rounded-xl p-12 text-center bg-muted/30">
                    <Camera className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Galería en preparación. Pronto se publicarán nuevas fotografías.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {list.map((photo, idx) => (
                      <button
                        key={`${photo.src}-${idx}`}
                        type="button"
                        onClick={() => setLightbox(photo)}
                        className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label={`Ver foto: ${photo.alt}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-0">
          <DialogTitle className="sr-only">{lightbox?.alt ?? "Foto"}</DialogTitle>
          {lightbox && (
            <div className="relative">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              {lightbox.caption && (
                <p className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white bg-gradient-to-t from-black/80 to-transparent">
                  {lightbox.caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
