import { GraduationCap, Users, Sparkles, MapPin, Video, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import ensenanzaGrupo from "@/assets/gallery/ensenanza-grupo.jpg";
import ensenanzaClase from "@/assets/gallery/ensenanza-clase.jpg";

const levels = [
  {
    icon: Users,
    title: "Jóvenes y Adultos",
    description: "Técnica profesional adaptada a tus objetivos musicales, sin importar tu edad o experiencia previa"
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

const modalities = [
  {
    icon: MapPin,
    title: "Clases Presenciales",
    description: "Clases en local propio o a domicilio del alumno. Experiencia personalizada y seguimiento directo.",
    phone: "+595 971 664878"
  },
  {
    icon: Video,
    title: "Clases Online",
    description: "Clases virtuales para mayor flexibilidad. Disponible para todos los niveles.",
    phone: "+595 971 664878"
  }
];

export const TeachingSection = () => {
  const handleScheduleClass = () => {
    const classesSection = document.getElementById('clases');
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
            Formación integral desde la experiencia orquestal, solista y escénica. Mi metodología se adapta a tu ritmo de aprendizaje, 
            tus metas y tu disponibilidad para que alcances tu máximo potencial musical.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        {/* Galería de Enseñanza */}
        <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img 
              src={ensenanzaGrupo} 
              alt="Clase grupal de flauta traversa" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute bottom-4 left-4 text-white font-medium">Clases Grupales</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img 
              src={ensenanzaClase} 
              alt="Enseñanza personalizada de flauta" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute bottom-4 left-4 text-white font-medium">Atención Personalizada</span>
            </div>
          </div>
        </div>

        {/* Modalidades */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif text-center text-foreground mb-8">
            Modalidades de Atención
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modalities.map((modality, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <modality.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {modality.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {modality.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Phone className="w-4 h-4" />
                      <span>{modality.phone}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleScheduleClass}
                      className="w-full"
                    >
                      Descubrí Tu Clase Ideal
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleScheduleClass}
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Descubrí Tu Clase Ideal
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Encontrá la modalidad perfecta para vos
          </p>
        </div>
      </div>
    </section>
  );
};
