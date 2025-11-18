import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Target, Youtube, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Festival Internacional de Flauta Traversa",
    year: "2023",
    location: "Teatro Principal",
    image: "/placeholder.svg",
    description: "Festival anual que reúne a flautistas de nivel internacional para masterclasses, conciertos y talleres especializados.",
    impact: [
      "150+ participantes de 8 países",
      "12 masterclasses con artistas internacionales",
      "5 conciertos públicos gratuitos"
    ],
    tags: ["Festival", "Internacional", "Masterclass"],
    videos: [
      {
        title: "Concierto de Apertura",
        url: "https://youtube.com/watch?v=example1"
      },
      {
        title: "Masterclass con Emmanuel Pahud",
        url: "https://youtube.com/watch?v=example2"
      }
    ]
  },
  {
    title: "Encuentro de Flauta Latinoamericana",
    year: "2022",
    location: "Conservatorio Nacional",
    image: "/placeholder.svg",
    description: "Encuentro enfocado en la música latinoamericana para flauta traversa, con invitados especiales de Argentina, Brasil y México.",
    impact: [
      "80+ estudiantes y profesionales",
      "8 talleres especializados",
      "3 conciertos temáticos"
    ],
    tags: ["Latinoamérica", "Educación", "Cultura"],
    videos: [
      {
        title: "Taller de Música Folclórica",
        url: "https://youtube.com/watch?v=example3"
      },
      {
        title: "Concierto Final",
        url: "https://youtube.com/watch?v=example4"
      }
    ]
  },
  {
    title: "Masterclass con Solistas Europeos",
    year: "2021",
    location: "Sala de Cámara",
    image: "/placeholder.svg",
    description: "Serie de masterclasses con solistas de las principales orquestas sinfónicas de Europa, enfocadas en repertorio orquestal y de cámara.",
    impact: [
      "50+ flautistas profesionales",
      "10 sesiones intensivas",
      "Repertorio orquestal y contemporáneo"
    ],
    tags: ["Masterclass", "Europa", "Profesional"],
    videos: [
      {
        title: "Masterclass Repertorio Orquestal",
        url: "https://youtube.com/watch?v=example5"
      },
      {
        title: "Técnica Avanzada",
        url: "https://youtube.com/watch?v=example6"
      }
    ]
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
            y promovido el intercambio cultural internacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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

                {project.videos && project.videos.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Youtube className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-semibold text-foreground">Videos</span>
                    </div>
                    <div className="space-y-2">
                      {project.videos.map((video, i) => (
                        <a
                          key={i}
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors group"
                        >
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {video.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      ))}
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
              <p className="text-muted-foreground mb-6">
                Estos proyectos son posibles gracias al apoyo de empresas, instituciones culturales
                y el gobierno. Si deseas ser parte de futuras ediciones o crear nuevos proyectos,
                contáctame para explorar oportunidades de colaboración.
              </p>
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
