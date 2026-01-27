import { Play, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Concerts = () => {
  const concerts = [
    {
      title: "Concierto para Flauta - Mozart",
      role: "Solista de Flauta",
      orchestra: "Orquesta Sinfónica Nacional",
      youtubeId: "dQw4w9WgXcQ", // Placeholder - reemplazar con ID real
      year: "2023"
    },
    {
      title: "Sinfonía No. 5 - Beethoven",
      role: "Director de Orquesta",
      orchestra: "Orquesta Comunitaria",
      youtubeId: "dQw4w9WgXcQ", // Placeholder - reemplazar con ID real
      year: "2022"
    },
    {
      title: "Suite para Flauta - Bach",
      role: "Solista de Flauta",
      orchestra: "Orquesta de Cámara Municipal",
      youtubeId: "dQw4w9WgXcQ", // Placeholder - reemplazar con ID real
      year: "2021"
    },
    {
      title: "Concierto de Gala",
      role: "Director Invitado",
      orchestra: "Orquesta Sinfónica de la Ciudad de Asunción",
      youtubeId: "dQw4w9WgXcQ", // Placeholder - reemplazar con ID real
      year: "2020"
    }
  ];

  return (
    <section id="conciertos" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Conciertos Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Presentaciones como solista de flauta y director de orquesta en escenarios nacionales e internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concerts.map((concert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* YouTube Embed */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${concert.youtubeId}`}
                    title={concert.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                {/* Concert Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-1">
                        {concert.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {concert.role}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {concert.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {concert.orchestra}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    asChild
                  >
                    <a 
                      href={`https://www.youtube.com/watch?v=${concert.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver en YouTube
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to YouTube Channel */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="gap-2"
            asChild
          >
            <a 
              href="https://www.youtube.com/@juangerardoayala" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Play className="w-5 h-5" />
              Ver más en mi canal de YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Concerts };
