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
            La trayectoria de Juan Gerardo Ayala tiene su raíz en la ciudad de{" "}
            <span className="text-foreground font-medium">Carapeguá</span>. Su vínculo con la música comenzó en 2004 gracias al proyecto{" "}
            <span className="text-foreground font-medium">Sonidos de la Tierra</span>, una oportunidad que le permitió descubrir la flauta traversa y que transformó su horizonte de vida. A través de las primeras becas de este programa, inició sus estudios en Asunción con el{" "}
            <span className="text-foreground font-medium">Prof. Simón Santander</span>, marcando el inicio de un camino de formación constante que lo llevaría a los principales escenarios del país y del exterior.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Actualmente, se desempeña como{" "}
            <span className="text-primary font-semibold">Flautista Solista</span>{" "}
            de las tres instituciones sinfónicas más importantes de la capital: la{" "}
            <span className="text-foreground font-medium">Orquesta Sinfónica Nacional (OSN)</span>, la{" "}
            <span className="text-foreground font-medium">Orquesta Sinfónica de la Ciudad de Asunción (OSCA)</span>{" "}
            y la{" "}
            <span className="text-foreground font-medium">Orquesta de Cámara Municipal de Asunción (OCMA)</span>. Obtuvo estas posiciones mediante concursos públicos de oposición mientras realizaba su formación académica en la Universidad Nacional de Asunción.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Con una mentalidad orientada al crecimiento integral, ha perfeccionado su técnica con los maestros{" "}
            <span className="text-foreground font-medium">Melina Federico</span>,{" "}
            <span className="text-foreground font-medium">Adriana Aquino</span>{" "}
            y{" "}
            <span className="text-foreground font-medium">Jorge de la Vega</span>. Su búsqueda de madurez artística lo ha llevado a participar en cursos y clases magistrales con referentes internacionales como{" "}
            <span className="text-foreground font-medium">Dejan Gavric, Matthieu Gauci-Ancelin, Edson Beltrami, James Hall, Michael Faust</span>{" "}
            y{" "}
            <span className="text-foreground font-medium">Lars Nilsson</span>, realizando estancias de perfeccionamiento en Argentina, Brasil, España y Alemania.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Como director de orquesta, fue galardonado con el{" "}
            <span className="text-primary font-semibold">Primer Puesto del Premio de Dirección Orquestal "Carlos Lara Bareiro"</span>, debutando con la Orquesta Sinfónica Nacional en 2024. En 2025, realizó su debut como director invitado de la Orquesta Sinfónica de la Ciudad de Asunción. Desde 2018, colabora regularmente como director invitado de la{" "}
            <span className="text-foreground font-medium">Orquesta de Cámara Municipal de Asunción</span>, participando activamente en su proyección artística.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Su trayectoria internacional incluye giras por Europa, Asia y América, destacando su participación en los{" "}
            <span className="text-foreground font-medium">American Music Awards (2012)</span>{" "}
            y su designación como{" "}
            <span className="text-primary font-semibold">"Artista por la Paz" de la UNESCO (2016)</span>{" "}
            junto al ensamble H2O. Ha integrado agrupaciones de prestigio como el{" "}
            <span className="text-foreground font-medium">Ensamble Zípoli</span>, el{" "}
            <span className="text-foreground font-medium">Quinteto de Viento Madera de la OSN</span>{" "}
            y la{" "}
            <span className="text-foreground font-medium">Orquesta del Congreso de la Nación</span>, manteniendo siempre el compromiso de evolucionar en cada ámbito de su vida profesional.
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
