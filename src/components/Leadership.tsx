import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Heart, Music, Shield, TrendingUp } from "lucide-react";

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
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Implementación de iniciativas para mejorar las condiciones de trabajo
                        y el desarrollo profesional dentro de la institución.
                      </p>
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
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Creación y organización de conciertos y eventos culturales que benefician
                        a la ciudadanía, promoviendo el acceso a la música de calidad.
                      </p>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
