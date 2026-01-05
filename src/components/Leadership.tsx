import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Heart, Music, Shield, TrendingUp, Youtube, ExternalLink } from "lucide-react";

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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
