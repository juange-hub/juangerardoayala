import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Target, Youtube, ExternalLink, Instagram } from "lucide-react";

const projects = [
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
    videos: []
  },
  {
    title: "Jornadas de Flauta Traversa e Instrumentos de Viento Madera",
    year: "Agosto 2025",
    location: "Asunción, Paraguay",
    image: "/placeholder.svg",
    description: "Charlas y clases magistrales a cargo del Flautista Jorge de la Vega (Argentina). Talleres de mantenimiento básico para flauta traversa e instrumentos de madera dictado por el Lic. Adriano Calcagno (Mendoza, Argentina). Colaborando a la formación de instrumentistas, luthieres e interesados en el mundo de la reparación y mantenimiento de instrumentos.",
    impact: [
      "Formación de instrumentistas y luthieres",
      "Intercambio internacional con maestros argentinos",
      "Talleres prácticos de mantenimiento instrumental"
    ],
    tags: ["Masterclass", "Taller", "Viento Madera"],
    instagramReelUrl: "https://www.instagram.com/reel/DOO6u_qCY7T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    sponsors: ["Powell Flutes", "Orquesta Sinfónica Nacional del Paraguay"],
    videos: []
  },
  {
    title: "Clases Magistrales con Matthieu Gauci-Ancelin",
    year: "Mayo 2018",
    location: "Asunción, Paraguay",
    image: "/placeholder.svg",
    description: "Clases magistrales con el reconocido flautista francés Matthieu Gauci-Ancelin, radicado en Berlín. Coordinación: Juan Gerardo Ayala.",
    impact: [
      "+20 flautistas beneficiados",
      "8 alumnos activos participantes",
      "Intercambio cultural internacional Francia-Alemania-Paraguay"
    ],
    tags: ["Masterclass", "Flauta Traversa", "Internacional"],
    youtubeUrl: "https://youtu.be/Hsa-rCzW_eE",
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

                {project.instagramReelUrl !== undefined && (
                  <div className="pt-4 border-t border-border">
                    <a
                      href={project.instagramReelUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                        project.instagramReelUrl 
                          ? "hover:bg-muted/50 group cursor-pointer" 
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {project.instagramReelUrl ? "Ver Reel en Instagram" : "Reel próximamente"}
                      </span>
                      {project.instagramReelUrl && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                      )}
                    </a>
                  </div>
                )}

                {project.youtubeUrl !== undefined && (
                  <div className="pt-4 border-t border-border">
                    <a
                      href={project.youtubeUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                        project.youtubeUrl 
                          ? "hover:bg-muted/50 group cursor-pointer" 
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <Youtube className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {project.youtubeUrl ? "Ver en YouTube" : "Video próximamente"}
                      </span>
                      {project.youtubeUrl && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                      )}
                    </a>
                  </div>
                )}

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
