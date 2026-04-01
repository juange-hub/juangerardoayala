import { Music, Award, Users, Globe, Trophy, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Bio = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "Primer Puesto",
      description: "Concurso de Dirección 'Carlos Lara Bareiro' 2024"
    },
    {
      icon: Globe,
      title: "Artista UNESCO",
      description: "Artista para la Paz 2016-2018"
    },
    {
      icon: Calendar,
      title: "+15 Años",
      description: "Trayectoria profesional"
    }
  ];

  const positions = [
    "Orquesta Sinfónica Nacional del Paraguay",
    "Orquesta Sinfónica de la Ciudad de Asunción",
    "Orquesta de Cámara Municipal de Asunción"
  ];

  return (
    <section id="bio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Sobre Mí
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Flautista solista y director de orquesta con trayectoria internacional
        </p>
        
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Inició su formación musical en la ciudad de Carapeguá, Paraguay, gracias a becas del proyecto 
            <span className="text-foreground font-medium"> Sonidos de la Tierra</span> (2004). Continuó sus estudios 
            con los profesores Simón Santander, Anina Federico, Adriana Aquino y Jorge de la Vega.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Posee una amplia trayectoria como flautista solista e integrante de ensambles, con presentaciones 
            en Paraguay y en diversos países de <span className="text-foreground font-medium">Europa, Asia y América</span>.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Ganador del <span className="text-primary font-semibold">Primer Puesto en el Concurso de Dirección Orquestal 
            "Carlos Lara Bareiro"</span>, debutando con la Orquesta Sinfónica Nacional del Paraguay en 2024. 
            En 2025 realiza su debut como director invitado de la Orquesta Sinfónica de la Ciudad de Asunción.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Ha participado en cursos de dirección con destacados maestros como Craig Fuchs, Dominique Fanal, 
            León Burke, Jooyong Ann, Osvaldo Ferreira, Lior Shambadal y Diego Sánchez Haase.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde 2018 dirige en repetidas ocasiones, en calidad de director invitado, a la 
            <span className="text-foreground font-medium"> Orquesta de Cámara Municipal de Asunción</span>, 
            con una participación activa en su crecimiento musical y proyección artística.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Designado <span className="text-primary font-semibold">Artista para la Paz de la UNESCO</span> (2016-2018) 
            con la Orquesta H2O Sonidos de la Tierra.
          </p>
        </div>

        {/* Highlights Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-elegant hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Current Positions */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif text-center text-foreground mb-6">
            Posiciones Actuales como Solista de Flauta
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm"
              >
                {position}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
