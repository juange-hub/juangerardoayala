import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Users, Briefcase, Heart, Music, Shield, TrendingUp, Youtube, ExternalLink, Camera, Handshake, Award, X, ChevronLeft, ChevronRight } from "lucide-react";
// Importar imágenes de actividades
import eventoCorreos from "@/assets/simusica/evento-correos.jpg";
import musicosConcierto from "@/assets/simusica/musicos-concierto.jpg";
import confraternidadCafe from "@/assets/simusica/confraternidad-cafe.jpg";
import grupoOcma from "@/assets/simusica/grupo-ocma.jpg";
import reunionOficial1 from "@/assets/simusica/reunion-oficial-1.jpg";
import reunionOficial2 from "@/assets/simusica/reunion-oficial-2.jpg";
import charlaAsamblea from "@/assets/simusica/charla-asamblea.jpg";
import reconocimiento1 from "@/assets/simusica/reconocimiento-1.jpg";
import reconocimiento2 from "@/assets/simusica/reconocimiento-2.jpg";
import reunionDirectiva from "@/assets/simusica/reunion-directiva.jpg";

const activityCategories = [
  {
    title: "Comisión Directiva",
    icon: Users,
    description: "Los 6 miembros de la comisión directiva del SIMUSICA",
    images: [
      { src: reunionDirectiva, alt: "Comisión directiva del SIMUSICA" },
      { src: confraternidadCafe, alt: "Reunión de comisión directiva" },
    ]
  },
  {
    title: "Charlas y Capacitaciones",
    icon: Award,
    description: "Formación continua para socios y comunidad",
    images: [
      { src: reconocimiento1, alt: "Charla con disertante" },
      { src: reconocimiento2, alt: "Participantes de capacitación" },
      { src: charlaAsamblea, alt: "Asamblea del SIMUSICA" },
      { src: grupoOcma, alt: "Capacitación grupal" },
      { src: musicosConcierto, alt: "Músicos en concierto" },
    ]
  },
  {
    title: "Reuniones y Gestión",
    icon: Handshake,
    description: "Trabajo continuo con autoridades e instituciones",
    images: [
      { src: reunionOficial1, alt: "Reunión oficial con autoridades" },
      { src: reunionOficial2, alt: "Mesa de trabajo institucional" },
      { src: eventoCorreos, alt: "Evento institucional" },
    ]
  }
];

const syndicateVideos = [
  {
    title: "Concierto Benéfico SIMUSICA 2023",
    url: "https://youtube.com/watch?v=example1",
    description: "Concierto organizado por el sindicato para recaudar fondos"
  },
  {
    title: "Capacitación: Derechos Laborales",
    url: "https://youtube.com/watch?v=example2",
    description: "Taller educativo sobre derechos de los músicos"
  },
  {
    title: "Asamblea General SIMUSICA",
    url: "https://youtube.com/watch?v=example3",
    description: "Presentación de logros y proyectos del periodo"
  }
];

export const Leadership = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; alt: string } | null>(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = activityCategories.flatMap(cat => cat.images);

  const openLightbox = (catIndex: number, imgIndex: number) => {
    setCurrentCategoryIndex(catIndex);
    setCurrentImageIndex(imgIndex);
    const image = activityCategories[catIndex].images[imgIndex];
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const getGlobalIndex = () => {
    let index = 0;
    for (let i = 0; i < currentCategoryIndex; i++) {
      index += activityCategories[i].images.length;
    }
    return index + currentImageIndex;
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const globalIndex = getGlobalIndex();
    let newGlobalIndex = direction === 'next' 
      ? (globalIndex + 1) % allImages.length 
      : (globalIndex - 1 + allImages.length) % allImages.length;
    
    // Find the category and image index for the new global index
    let remaining = newGlobalIndex;
    for (let catIdx = 0; catIdx < activityCategories.length; catIdx++) {
      const catImages = activityCategories[catIdx].images;
      if (remaining < catImages.length) {
        setCurrentCategoryIndex(catIdx);
        setCurrentImageIndex(remaining);
        setCurrentImage(catImages[remaining]);
        break;
      }
      remaining -= catImages.length;
    }
  };

  return (
    <section id="liderazgo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Liderazgo y Gestión Sindical
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromiso con los derechos laborales de los músicos y el desarrollo cultural de la comunidad
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-primary" />
                    Secretario General
                  </CardTitle>
                  <p className="text-lg font-semibold text-muted-foreground">
                    Sindicato de Músicos de la Sinfónica y Cámara de Asunción
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">SIMUSICA</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="default" className="text-sm px-4 py-2">
                    2021 - 2023
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    Reelecto 2023 - 2025
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Derechos Laborales</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Trabajo conjunto con la Comisión Directiva para defender y promover los derechos
                        laborales de los músicos profesionales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Mejoras Institucionales</h3>
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
                        <li>Renovación de imagen de marca del sindicato</li>
                        <li>Actualización de los estatutos sociales</li>
                        <li>Trabajo cercano con autoridades municipales y la Dirección de Cultura</li>
                        <li>Mejora de condiciones de trabajo y desarrollo profesional</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <Music className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Actividades Culturales</h3>
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
                        <li>Conciertos y eventos culturales abiertos a la ciudadanía</li>
                        <li>Charlas sobre derechos laborales, salud mental y salud física del músico sinfónico</li>
                        <li>Dirigidas a socios y abiertas a estudiantes e interesados</li>
                        <li>Con profesionales especialistas en cada área</li>
                        <li>Actividades recreativas y de confraternidad entre compañeros</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Ayuda Social</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Gestión de subsidios y programas de ayuda social para apoyar a los músicos
                        socios en momentos de necesidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Logros y Compromiso</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-primary mb-1">4+</div>
                    <div className="text-sm text-muted-foreground">Años de servicio</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-primary mb-1">Reelecto</div>
                    <div className="text-sm text-muted-foreground">Periodo 2023-2025</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Compromiso social</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Youtube className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Actividades y Conciertos</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Mira algunos de los conciertos, capacitaciones y eventos organizados por SIMUSICA
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {syndicateVideos.map((video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="h-full hover:shadow-md transition-all hover:border-primary/40 cursor-pointer">
                        <CardContent className="pt-4 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <Youtube className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          </div>
                          <h4 className="font-medium text-sm text-foreground leading-tight">
                            {video.title}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {video.description}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Galería de Actividades */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Camera className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Galería de Actividades</h3>
                </div>
                
                <div className="space-y-8">
                  {activityCategories.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <category.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{category.title}</h4>
                          <p className="text-xs text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      
                      <div className={`grid gap-3 ${
                        category.images.length === 3 
                          ? 'grid-cols-2 md:grid-cols-3' 
                          : category.images.length === 4 
                            ? 'grid-cols-2 md:grid-cols-4' 
                            : 'grid-cols-2 md:grid-cols-3'
                      }`}>
                        {category.images.map((image, imgIndex) => (
                          <div 
                            key={imgIndex}
                            onClick={() => openLightbox(catIndex, imgIndex)}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white text-xs font-medium line-clamp-2">{image.alt}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous button */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            {currentImage && (
              <div className="flex flex-col items-center gap-4 max-h-full px-16">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg"
                />
                <p className="text-white text-center text-lg font-medium px-4">
                  {currentImage.alt}
                </p>
                <p className="text-white/60 text-sm">
                  {getGlobalIndex() + 1} / {allImages.length}
                </p>
              </div>
            )}

            {/* Next button */}
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
