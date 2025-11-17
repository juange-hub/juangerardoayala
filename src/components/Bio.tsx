import { Music, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Bio = () => {
  const highlights = [
    {
      icon: Music,
      title: "Especialización",
      description: "Flauta y Dirección de Orquesta"
    },
    {
      icon: Award,
      title: "Experiencia",
      description: "Solista de Orquestas Sinfónicas"
    },
    {
      icon: Users,
      title: "Trayectoria",
      description: "Director y Pedagogo Musical"
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
            Como flautista solista y director de orquesta, he dedicado mi carrera a la música sinfónica y 
            a la formación de nuevos talentos. Mi experiencia como solista en orquestas sinfónicas me ha 
            permitido desarrollar una técnica depurada y un profundo entendimiento del repertorio clásico.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Combino mi pasión por la interpretación con la enseñanza, compartiendo conocimientos técnicos 
            y artísticos que he adquirido a lo largo de mi trayectoria profesional en escenarios nacionales 
            e internacionales.
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
