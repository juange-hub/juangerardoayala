export const Experience = () => {
  const timeline = [
    {
      year: "2021 - 2025",
      title: "Secretario General",
      institution: "SIMUSICA",
      description: "Secretario General del sindicato. Periodo 2021-2023 y reelecto para 2023-2025."
    },
    {
      year: "2021 - 2022",
      title: "Profesor de Flauta Traversa",
      institution: "UNA",
      description: "Profesor de la cátedra de Flauta Traversa de la carrera de Licenciatura en Música."
    },
    {
      year: "2018 - Actualmente",
      title: "Director Invitado",
      institution: "OCMA",
      description: "Director invitado en repetidas ocasiones, dirigiendo solistas y obras de cámara."
    },
    {
      year: "2014 - Actualmente",
      title: "1° Flauta Solista",
      institution: "OSN",
      description: "Músico flautista, primera flauta solista de la orquesta sinfónica nacional."
    },
    {
      year: "2013 - Actualmente",
      title: "1° Flauta Solista",
      institution: "OSCA",
      description: "Músico flautista, primera flauta solista de la orquesta sinfónica municipal."
    },
    {
      year: "2013 - Actualmente",
      title: "1° Flauta Solista",
      institution: "OCMA",
      description: "Músico flautista, primera flauta solista de la orquesta de cámara municipal."
    },
    {
      year: "2011 - 2012",
      title: "Músico Invitado",
      institution: "OSIC",
      description: "Músico invitado como segundo o tercer flautista y piccolista."
    },
    {
      year: "2010 - 2011",
      title: "Profesor de Música",
      institution: "ÑEMITY",
      description: "Centro de aprendizaje Psico Social para Niños/as y Adolescentes con experiencia de vida en calle."
    },
    {
      year: "2009 - 2010",
      title: "Flautista y Piccolista",
      institution: "UNINORTE",
      description: "Músico invitado como tercer flautista y piccolista."
    },
    {
      year: "2008 - 2009",
      title: "Profesor de Música",
      institution: "Sonidos de la Tierra",
      description: "Profesor de flauta traversa en el proyecto de educación musical comunitaria."
    }
  ];

  return (
    <section id="experiencia" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
          Trayectoria Profesional
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-[72px] md:left-[100px] top-0 bottom-0 w-px bg-border hidden sm:block" />
            
            <div className="space-y-3">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-3 md:gap-6 items-start group"
                >
                  {/* Año */}
                  <div className="w-20 md:w-28 flex-shrink-0 text-right">
                    <span className="text-accent font-semibold text-xs md:text-sm">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Punto en la línea */}
                  <div className="hidden sm:flex items-center justify-center w-3 flex-shrink-0 mt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent border-2 border-background group-hover:scale-125 transition-transform" />
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex-grow bg-card border border-border rounded-lg p-3 md:p-4 group-hover:border-accent/50 transition-colors">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                      <h3 className="font-semibold text-foreground text-sm md:text-base">
                        {item.title}
                      </h3>
                      <span className="text-accent text-xs md:text-sm font-medium">
                        {item.institution}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
