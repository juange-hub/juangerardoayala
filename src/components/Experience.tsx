import { Card } from "@/components/ui/card";

export const Experience = () => {
  const timeline = [
    {
      year: "2014 - Actualmente",
      title: "1° Flauta Solista",
      institution: "Orquesta Sinfónica Nacional del Paraguay (OSN)",
      description: "Músico flautista, primera flauta solista de la orquesta sinfónica nacional."
    },
    {
      year: "2013 - Actualmente",
      title: "1° Flauta Solista",
      institution: "Orquesta Sinfónica de la Ciudad de Asunción (OSCA)",
      description: "Músico flautista, primera flauta solista de la orquesta sinfónica municipal."
    },
    {
      year: "2013 - Actualmente",
      title: "1° Flauta Solista",
      institution: "Orquesta de Cámara Municipal de Asunción (OCMA)",
      description: "Músico flautista, primera flauta solista de la orquesta de cámara municipal."
    },
    {
      year: "2021 - Actualmente",
      title: "Secretario General",
      institution: "Sindicato de Músicos de la Sinfónica y Cámara de Asunción (SIMUSICA)",
      description: "Secretario General del sindicato. Periodo 2021-2023 y reelecto para 2023-2025."
    },
    {
      year: "2018 - Actualmente",
      title: "Director Invitado",
      institution: "Orquesta de Cámara Municipal de Asunción (OCMA)",
      description: "Director invitado en repetidas ocasiones, dirigiendo solistas y obras de cámara."
    },
    {
      year: "2021 - 2022",
      title: "Profesor de Flauta Traversa",
      institution: "Universidad Nacional de Asunción (UNA)",
      description: "Profesor de la cátedra de Flauta Traversa de la carrera de Licenciatura en Música."
    },
    {
      year: "2011 - 2012",
      title: "Músico Invitado",
      institution: "Orquesta Sinfónica del Congreso Nacional (OSIC)",
      description: "Músico invitado como segundo o tercer flautista y piccolista."
    },
    {
      year: "2010 - 2011",
      title: "Profesor de Música",
      institution: "ÑEMITY - Secretaría Nacional de la Niñez y la Adolescencia",
      description: "Centro de aprendizaje Psico Social para Niños/as y Adolescentes con experiencia de vida en calle."
    },
    {
      year: "2009 - 2010",
      title: "Flautista y Piccolista",
      institution: "Orquesta Sinfónica de la Universidad del Norte (UNINORTE)",
      description: "Músico invitado como tercer flautista y piccolista."
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Trayectoria Profesional
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] border-l-4 border-l-accent"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-accent font-semibold text-lg">{item.year}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-medium mb-2">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
