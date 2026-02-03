import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Experience = () => {
  const timeline = [
    {
      year: "2021 - 2025",
      title: "Secretario General",
      institution: "Sindicato de Músicos de la Sinfónica y Cámara de Asunción (SIMUSICA)",
      description: "Secretario General del sindicato. Periodo 2021-2023 y reelecto para 2023-2025."
    },
    {
      year: "2021 - 2022",
      title: "Profesor de Flauta Traversa",
      institution: "Universidad Nacional de Asunción (UNA)",
      description: "Profesor de la cátedra de Flauta Traversa de la carrera de Licenciatura en Música."
    },
    {
      year: "2018 - Actualmente",
      title: "Director Invitado",
      institution: "Orquesta de Cámara Municipal de Asunción (OCMA)",
      description: "Director invitado en repetidas ocasiones, dirigiendo solistas y obras de cámara."
    },
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
    },
    {
      year: "2008 - 2009",
      title: "Profesor de Música",
      institution: "Sonidos de la Tierra",
      description: "Profesor de flauta traversa en el proyecto de educación musical comunitaria. Formación de jóvenes músicos en comunidades del interior del país."
    }
  ];

  return (
    <section id="experiencia" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
          Trayectoria Profesional
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {timeline.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-accent"
              >
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-left w-full pr-4">
                    <span className="text-accent font-semibold text-sm sm:w-36 flex-shrink-0">
                      {item.year}
                    </span>
                    <div className="flex-grow">
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <span className="text-muted-foreground hidden sm:inline"> — {item.institution}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-0">
                  <div className="pl-0 sm:pl-40">
                    <p className="text-muted-foreground font-medium text-sm mb-1 sm:hidden">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
