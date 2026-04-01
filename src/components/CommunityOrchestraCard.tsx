import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, ArrowRight, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const CommunityOrchestraCard = () => {
  return (
    <section id="orquesta" className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-primary/30 shadow-lg bg-gradient-to-br from-card to-card/50">
            <CardHeader className="bg-primary/10 border-b border-primary/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2" variant="secondary">Proyecto Social</Badge>
                    <CardTitle className="text-2xl">Orquesta Comunitaria</CardTitle>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un proyecto especial para llevar música de calidad a comunidades del interior sin acceso
                a espacios culturales. Construyendo comunidad y educando a través del arte en lugares
                donde las personas no pueden asistir a un teatro.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Impacto Social</h4>
                    <p className="text-xs text-muted-foreground">
                      Democratizando el acceso a la cultura
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Comunidad</h4>
                    <p className="text-xs text-muted-foreground">
                      Creando lazos a través de la música
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/orquesta-comunitaria">
                <Button className="w-full gap-2 group" size="lg">
                  Conocer el proyecto completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Proyecto en búsqueda de apoyo empresarial y gubernamental
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
