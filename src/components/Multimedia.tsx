import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Instagram, Music2 } from "lucide-react";

const Multimedia = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      color: "hover:text-[#FF0000]"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "#",
      color: "hover:text-[#00F2EA]"
    }
  ];

  const concerts = [
    {
      title: "Concierto Internacional - Europa",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
      location: "Teatro Real, Madrid"
    },
    {
      title: "Gira Sudamericana",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
      location: "Teatro Colón, Buenos Aires"
    },
    {
      title: "Festival Nacional de Música",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
      location: "Auditorio Nacional"
    },
    {
      title: "Concierto de Cámara",
      image: "https://images.unsplash.com/photo-1519683384663-18b88a9628e2?w=800&q=80",
      location: "Sala Principal"
    },
    {
      title: "Presentación Sinfónica",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      location: "Teatro de la Ciudad"
    },
    {
      title: "Tour Internacional",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80",
      location: "Carnegie Hall, Nueva York"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Galería Multimedia
          </h2>
          <p className="text-muted-foreground text-lg">
            Momentos destacados de presentaciones y conciertos
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 transition-all duration-300 ${social.color}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300">
                <social.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-foreground">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concerts.map((concert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={concert.image}
                    alt={concert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{concert.title}</h3>
                      <p className="text-sm text-white/90">{concert.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Multimedia };
