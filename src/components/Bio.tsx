import { Music, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Bio = () => {
  const highlights = [
    {
      icon: Music,
      title: "Especialización",
      description: "Piano, Violín y Teoría Musical"
    },
    {
      icon: Award,
      title: "Experiencia",
      description: "15+ años enseñando"
    },
    {
      icon: Users,
      title: "Estudiantes",
      description: "200+ alumnos formados"
    }
  ];

  return (
    <section id="bio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Sobre Mí
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Con más de 15 años de experiencia en la enseñanza musical, me dedico a formar músicos con una 
            sólida base técnica y una profunda comprensión artística. Mi enfoque pedagógico combina la 
            tradición clásica con metodologías modernas adaptadas a cada estudiante.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Graduado del Conservatorio Superior con honores, he tenido el privilegio de estudiar con 
            maestros reconocidos internacionalmente y de llevar ese conocimiento a mis alumnos, 
            ayudándoles a alcanzar sus metas musicales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
