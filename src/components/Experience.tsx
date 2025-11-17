import { Card } from "@/components/ui/card";

export const Experience = () => {
  const timeline = [
    {
      year: "2023 - Presente",
      title: "Maestro Principal",
      institution: "Academia de Música Avanzada",
      description: "Dirección de programa de estudios superiores en música clásica"
    },
    {
      year: "2018 - 2023",
      title: "Profesor Titular",
      institution: "Conservatorio Nacional",
      description: "Enseñanza de piano, violín y teoría musical a nivel profesional"
    },
    {
      year: "2015 - 2018",
      title: "Intérprete Profesional",
      institution: "Orquesta Sinfónica Nacional",
      description: "Primer violín en temporadas regulares y giras internacionales"
    },
    {
      year: "2008 - 2015",
      title: "Formación Profesional",
      institution: "Conservatorio Superior",
      description: "Licenciatura y Maestría en Interpretación Musical"
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
