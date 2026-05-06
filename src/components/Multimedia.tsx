import { Youtube, Instagram, Music2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Multimedia = () => {
  const personalLinks = [
    {
      name: "YouTube",
      handle: "@juangerardoayala",
      icon: Youtube,
      url: "https://www.youtube.com/@juangerardoayala",
      color: "hover:text-[#FF0000] hover:border-[#FF0000]/30"
    },
    {
      name: "Instagram",
      handle: "@juangeayala.py",
      icon: Instagram,
      url: "https://www.instagram.com/juangeayala.py/",
      color: "hover:text-[#E4405F] hover:border-[#E4405F]/30"
    },
    {
      name: "TikTok",
      handle: "@juangerardoayala",
      icon: Music2,
      url: "https://www.tiktok.com/@juangerardoayala",
      color: "hover:text-[#00F2EA] hover:border-[#00F2EA]/30"
    }
  ];

  return (
    <section id="multimedia" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Redes Sociales
          </h2>
          <p className="text-muted-foreground text-lg">
            Sígueme en redes sociales para contenido musical y actualizaciones
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
                <p className="text-sm text-primary">{social.handle}</p>
              </Card>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export { Multimedia };
