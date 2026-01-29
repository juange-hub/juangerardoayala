import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Target, Youtube, ExternalLink, MessageCircle, Mail } from "lucide-react";
import jornadasFlautaImg from "@/assets/jornadas-flauta.jpg";

const projects = [
  {
    title: "Jornadas de Flauta Traversa e Instrumentos de Viento Madera",
    year: "Agosto 2025",
    location: "Asunción, Paraguay",
    image: jornadasFlautaImg,
    description: "Charlas y clases magistrales a cargo del Flautista Jorge de la Vega (Argentina). Talleres de mantenimiento básico para flauta traversa e instrumentos de madera dictado por el Lic. Adriano Calcagno (Mendoza, Argentina). Colaborando a la formación de instrumentistas, luthieres e interesados en el mundo de la reparación y mantenimiento de instrumentos.",
    impact: [
      "Formación de instrumentistas y luthieres",
      "Intercambio internacional con maestros argentinos",
      "Talleres prácticos de mantenimiento instrumental"
    ],
    tags: ["Masterclass", "Taller", "Viento Madera"],
    sponsors: ["Powell Flutes", "Orquesta Sinfónica Nacional del Paraguay"],
    videos: []
  },
  {
    title: "Concierto de la Gran Flauta",
    year: "Mayo 2021",
    location: "Teatro Municipal de Asunción Ignacio A. Pane",
    image: "/placeholder.svg",
    description: "Flautistas Paraguayos con la Orquesta de Cámara Municipal de Asunción. Director: Miguel Ángel Echeverría. Director invitado: Juan Gerardo Ayala. Coordinación general: Juan Gerardo Ayala, con el apoyo de la Sociedad Filarmónica de Asunción y del Maestro Miguel Ángel Echeverría.",
    impact: [
      "1 concierto público gratuito",
      "Solistas invitados de distintas regiones del Paraguay",
      "Programa dedicado a la flauta traversa"
    ],
    tags: ["Concierto", "Flauta Traversa", "Gratuito"],
    youtubeId: "lMQGHmaM0J8",
    videos: [
      { title: "Concierto completo - Evento de Flautistas 2021", url: "https://youtu.be/X_842soB9fI" },
      { title: "Trío de Flautas", url: "https://youtu.be/PjHgrNcQJr0" }
    ]
  },
  {
    title: "Clases Magistrales con Matthieu Gauci-Ancelin",
    year: "Mayo 2018",
    location: "Asunción, Paraguay",
    image: "/placeholder.svg",
    description: "Clases magistrales con el reconocido flautista francés Matthieu Gauci-Ancelin, radicado en Berlín. Coordinación: Juan Gerardo Ayala. Las clases magistrales fueron gratuitas para los estudiantes gracias al apoyo obtenido.",
    impact: [
      "+20 flautistas beneficiados",
      "8 alumnos activos participantes",
      "1 concierto público gratuito",
      "Clases magistrales gratuitas para estudiantes",
      "Intercambio cultural internacional Francia-Alemania-Paraguay"
    ],
    tags: ["Masterclass", "Flauta Traversa", "Internacional", "Gratuito"],
    youtubeId: "Hsa-rCzW_eE",
    sponsors: ["Sociedad Filarmónica de Asunción", "Instituto Cultural Paraguayo Alemán", "Embajada de Alemania en Paraguay"],
    videos: []
  }
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Proyectos Realizados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Festivales y masterclasses que han impulsado la formación de flautistas
            y promovido el intercambio cultural nacional e internacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.youtubeId ? (
                <div className="relative h-48 bg-muted overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
              ) : (
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Target className="w-4 h-4 text-primary" />
                    Impacto
                  </div>
                  <ul className="space-y-1">
                    {project.impact.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.sponsors && project.sponsors.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Con el apoyo de:</span> {project.sponsors.join(", ")}
                    </p>
                  </div>
                )}



                {project.videos && project.videos.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Youtube className="w-4 h-4 text-destructive" />
                      <span className="text-sm font-semibold text-foreground">Más del mismo evento</span>
                    </div>
                    <div className="space-y-3">
                      {project.videos.map((video, i) => {
                        const videoId = video.url.includes('youtu.be/') 
                          ? video.url.split('youtu.be/')[1]?.split('?')[0]
                          : video.url.includes('v=')
                            ? video.url.split('v=')[1]?.split('&')[0]
                            : null;
                        
                        return (
                          <div key={i} className="space-y-1">
                            <p className="text-xs text-muted-foreground font-medium">{video.title}</p>
                            {videoId ? (
                              <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                                <iframe
                                  src={`https://www.youtube.com/embed/${videoId}`}
                                  title={video.title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            ) : (
                              <a
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                              >
                                Ver video <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                ¿Interesado en colaborar?
              </h3>
              <p className="text-muted-foreground mb-4">
                Estos proyectos buscan dar oportunidades a jóvenes estudiantes, elevar el nivel flautístico
                del país y llegar a quienes no pueden acceder fácilmente a formación de calidad.
              </p>
              <p className="text-muted-foreground mb-6">
                Tu apoyo es fundamental para democratizar el acceso a la educación musical y beneficiar
                a quienes no pueden costear clases con maestros internacionales. Gracias al respaldo de
                empresas, instituciones culturales y el gobierno, hemos logrado ofrecer clases y conciertos
                gratuitos. Si deseas ser parte de futuras ediciones, contáctame para explorar oportunidades de colaboración.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button asChild className="gap-2">
                  <a 
                    href="https://wa.me/595971664878?text=Hola%2C%20me%20interesa%20colaborar%20con%20los%20proyectos%20musicales" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href="mailto:juanayalaflute@gmail.com?subject=Colaboración%20-%20Proyectos%20Musicales">
                    <Mail className="w-5 h-5" />
                    Enviar Email
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Impacto Social</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Eventos Anuales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Educación Musical</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
