import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Music, Users, MapPin, Target, TrendingUp, Building2, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const OrchestraCommunity = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Proyecto Social y Cultural</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Orquesta Comunitaria
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Un proyecto para llevar música de calidad a comunidades sin acceso a espacios culturales,
              educando y construyendo comunidad a través del arte
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Heart className="w-5 h-5" />
                Quiero apoyar este proyecto
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-5 h-5" />
                Más información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">La Visión</h2>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Crear una orquesta con temática particular en mi ciudad natal, diseñada para realizar
                  conciertos en zonas del interior del país donde las personas no tienen acceso a teatros
                  ni espacios culturales formales.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Este proyecto busca democratizar el acceso a la música clásica y popular, crear comunidad
                  alrededor del arte y educar a través de la música a personas que viven en lugares donde
                  estas oportunidades simplemente no existen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Áreas de Impacto</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Construcción de Comunidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Crear espacios de encuentro social y cultural en zonas donde no existen, fortaleciendo
                  el tejido comunitario a través de la música.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Educación Musical</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Educar a través de la música, acercando el arte a niños, jóvenes y adultos que
                  nunca han tenido la oportunidad de asistir a un concierto en vivo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Alcance Interior</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Llevar música de calidad a rincones del país donde no hay teatros ni acceso
                  a opciones culturales, rompiendo barreras geográficas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Objetivos del Proyecto</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Music className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Conciertos Accesibles</h3>
                      <p className="text-sm text-muted-foreground">
                        Realizar conciertos gratuitos o a bajo costo en plazas, escuelas y centros
                        comunitarios del interior del país.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Formación de Músicos Locales</h3>
                      <p className="text-sm text-muted-foreground">
                        Reclutar y formar músicos de las comunidades locales, creando oportunidades
                        de desarrollo profesional.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Talleres Educativos</h3>
                      <p className="text-sm text-muted-foreground">
                        Organizar talleres para niños y jóvenes, despertando el interés por la música
                        y formando nuevas audiencias.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Impacto Sostenible</h3>
                      <p className="text-sm text-muted-foreground">
                        Crear un modelo replicable que pueda extenderse a otras regiones,
                        generando impacto cultural a largo plazo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Oportunidades de Colaboración
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Este proyecto busca el apoyo de empresas, instituciones gubernamentales y organizaciones
              comprometidas con el desarrollo cultural y social
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    <CardTitle>Empresas Privadas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Beneficios de colaborar:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Responsabilidad social empresarial</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Visibilidad de marca en eventos</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Desgravación fiscal</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Impacto medible en comunidades</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle>Gobierno y Estado</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Alineación con objetivos:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span> Democratización de la cultura</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Educación y desarrollo social</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Inclusión y equidad territorial</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> Fortalecimiento identidad cultural</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Hagamos realidad este proyecto juntos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si tu empresa u organización está interesada en apoyar este proyecto cultural y social,
              me encantaría conversar sobre cómo podemos colaborar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Contactar por email
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Agendar reunión
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrchestraCommunity;
