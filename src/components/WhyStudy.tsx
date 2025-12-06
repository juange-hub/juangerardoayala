import { Brain, Activity, Heart, Ear } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Desarrollo Cognitivo-Conductual",
    description: "El estudio musical aporta enormes beneficios cognitivos y conductuales en niños, adultos y personas mayores."
  },
  {
    icon: Activity,
    title: "Mejora de la Coordinación Motora y Conciencia Corporal",
    description: "Tocar instrumentos musicales aumenta la coordinación motora y desarrolla la capacidad de dominio del propio cuerpo."
  },
  {
    icon: Heart,
    title: "Desarrollo de Valores Éticos y Autosuperación",
    description: "Las actividades musicales favorecen la socialización y estimulan valores como la paciencia, la solidaridad, la participación, la superación de los propios límites y la aceptación del error como parte del aprendizaje."
  },
  {
    icon: Ear,
    title: "Construcción de una Escucha Musical Consciente",
    description: "A lo largo de las clases de música y con la evolución de los estudios, el sentido crítico sobre apreciación y percepción musical se refina. Es la construcción del oído atento para la música."
  }
];

export const WhyStudy = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            4 Motivos para Empezar a Estudiar Música Ahora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los beneficios transformadores que la música puede aportar a tu vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
