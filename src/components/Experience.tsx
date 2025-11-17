import { Card } from "@/components/ui/card";

export const Experience = () => {
  const timeline = [
    {
      year: "2020 - Presente",
      title: "Director de Orquesta y Pedagogo",
      institution: "Proyectos Orquestales y Academia Musical",
      description: "Dirección de agrupaciones sinfónicas y formación de flautistas profesionales"
    },
    {
      year: "2015 - Presente",
      title: "Solista de Flauta",
      institution: "Orquestas Sinfónicas",
      description: "Actuación como solista principal en orquestas sinfónicas reconocidas"
    },
    {
      year: "2010 - 2020",
      title: "Flautista Principal",
      institution: "Orquestas Sinfónicas Profesionales",
      description: "Primera flauta en temporadas regulares, conciertos y giras"
    },
    {
      year: "2005 - 2010",
      title: "Formación Profesional",
      institution: "Conservatorio Superior",
      description: "Estudios especializados en flauta y dirección orquestal"
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
