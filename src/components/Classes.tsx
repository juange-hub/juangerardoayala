import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const Classes = () => {
  const packages = [
    {
      name: "Clase Individual",
      price: "$50",
      duration: "por sesión de 60 min",
      features: [
        "Atención personalizada en flauta",
        "Técnica y repertorio adaptado",
        "Material de estudio incluido",
        "Horario flexible"
      ],
      popular: false
    },
    {
      name: "Paquete Mensual",
      price: "$180",
      duration: "4 clases / mes",
      features: [
        "Ahorra $20 por mes",
        "Clases semanales de flauta",
        "Seguimiento continuo de progreso",
        "Material de estudio incluido",
        "Acceso a recursos online"
      ],
      popular: true
    },
    {
      name: "Programa Intensivo",
      price: "$350",
      duration: "8 clases / mes",
      features: [
        "Ahorra $50 por mes",
        "2 clases semanales intensivas",
        "Preparación para audiciones",
        "Material premium incluido",
        "Acceso a recursos online",
        "Técnica avanzada de interpretación"
      ],
      popular: false
    }
  ];

  return (
    <section id="clases" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Clases Particulares
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Clases de flauta con enfoque profesional - Elige el plan que mejor se adapte a tus objetivos musicales
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`p-8 relative hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] ${
                pkg.popular ? 'border-accent border-2' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  Más Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.duration}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Reservar Ahora
              </Button>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Métodos de Pago</h3>
          <Card className="p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg mb-3">Pagos en Línea</h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Transferencia bancaria</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg mb-3">Otros Métodos</h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Efectivo en clase</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Depósito bancario</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Planes de pago personalizados</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
