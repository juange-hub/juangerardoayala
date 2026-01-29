import { Youtube, Instagram, Music2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Multimedia = () => {
  const personalLinks = [
    {
      name: "YouTube",
      handle: "@juangerardoayala",
      icon: Youtube,
      url: "https://www.youtube.com/@juangerardoayala",
      color: "hover:text-[#FF0000] hover:border-[#FF0000]/30",
      description: "Conciertos y presentaciones"
    },
    {
      name: "Instagram",
      handle: "@juangerardoayala",
      icon: Instagram,
      url: "https://www.instagram.com/juangerardoayala",
      color: "hover:text-[#E4405F] hover:border-[#E4405F]/30",
      description: "Perfil profesional"
    },
    {
      name: "TikTok",
      handle: "@juangerardoayala",
      icon: Music2,
      url: "https://www.tiktok.com/@juangerardoayala",
      color: "hover:text-[#00F2EA] hover:border-[#00F2EA]/30",
      description: "Contenido musical"
    }
  ];

  const communityLink = {
    name: "Flautistas PY",
    handle: "@flautistas_py",
    icon: Instagram,
    url: "https://www.instagram.com/flautistas_py",
    color: "hover:text-[#E4405F] hover:border-[#E4405F]/30",
    description: "Actividades y eventos para flautistas en Paraguay"
  };

  return (
    <section id="multimedia" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Redes y Comunidad
          </h2>
          <p className="text-muted-foreground text-lg">
            Sígueme en redes sociales y conecta con la comunidad flautística
          </p>
        </div>

        {/* Personal Social Links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {personalLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className={`p-6 text-center transition-all duration-300 ${social.color} hover:shadow-lg`}>
                <social.icon className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{social.name}</h3>
                <p className="text-sm text-primary mb-2">{social.handle}</p>
                <p className="text-xs text-muted-foreground">{social.description}</p>
              </Card>
            </a>
          ))}
        </div>

        {/* Community Section */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
            Comunidad Flautística
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            Gestiono un espacio dedicado a compartir actividades, eventos, masterclasses y recursos para flautistas en Paraguay
          </p>
          
          <a
            href={communityLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-md mx-auto"
          >
            <Card className={`p-6 text-center transition-all duration-300 ${communityLink.color} hover:shadow-lg bg-primary/5 border-primary/20`}>
              <communityLink.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-xl text-foreground mb-1">{communityLink.name}</h3>
              <p className="text-sm text-primary mb-2">{communityLink.handle}</p>
              <p className="text-sm text-muted-foreground">{communityLink.description}</p>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Multimedia };
