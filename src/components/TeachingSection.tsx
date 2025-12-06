import { GraduationCap, Users, Baby, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const levels = [
  {
    icon: Baby,
    title: "Niños",
    description: "Iniciación musical desde temprana edad con métodos lúdicos y creativos"
  },
  {
    icon: Users,
    title: "Jóvenes y Adultos",
    description: "Técnica profesional adaptada a tus objetivos musicales"
  },
  {
    icon: GraduationCap,
    title: "Estudiantes Avanzados",
    description: "Preparación para conservatorios, audiciones y concursos"
  },
  {
    icon: Sparkles,
    title: "Aficionados",
    description: "Aprende a tu ritmo y disfruta el placer de hacer música"
  }
];

export const TeachingSection = () => {
  const handleScheduleClass = () => {
    const classesSection = document.getElementById('classes');
    if (classesSection) {
      classesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Clases Particulares
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            Enseñanza Personalizada para<br />
            <span className="text-primary">Todos los Niveles y Edades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada estudiante es único. Mi metodología se adapta a tu ritmo de aprendizaje, 
            tus metas y tu disponibilidad para que alcances tu máximo potencial musical.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {levels.map((level, index) => (
            <div 
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-6 text-center hover:shadow-elegant hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <level.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {level.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {level.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleScheduleClass}
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Agendar Clase de Prueba Gratuita
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Sin compromiso • Primera clase sin costo
          </p>
        </div>
      </div>
    </section>
  );
};
