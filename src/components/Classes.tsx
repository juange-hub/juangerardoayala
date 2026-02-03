import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Clock } from "lucide-react";

export const Classes = () => {
  // Configuración de cupos - Cambiar estos valores según disponibilidad
  const totalSpots = 8;
  const takenSpots = 5;
  const availableSpots = totalSpots - takenSpots;

  const packages = [
    {
      name: "Clase Individual",
      priceUSD: "$25",
      priceGS: "Gs. 170.000",
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
      priceUSD: "$100",
      priceGS: "Gs. 600.000",
      duration: "4 clases / mes",
      features: [
        "Ahorrás Gs. 80.000 por mes",
        "Clases semanales de flauta",
        "Seguimiento continuo de progreso",
        "Material de estudio incluido",
        "Acceso a recursos online"
      ],
      popular: true
    },
    {
      name: "Combo Doble",
      priceUSD: "$140",
      priceGS: "Gs. 850.000",
      duration: "8 clases / 4 meses",
      badge: "Ahorrá 20%",
      features: [
        "2 clases por mes durante 4 meses",
        "Una clase enfocada en técnica y ejercicios",
        "Otra clase enfocada en repertorio y performance",
        "Seguimiento continuo de progreso",
        "Material de estudio incluido",
        "Ideal para desarrollo integral"
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
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Clases de flauta con enfoque profesional - Elige el plan que mejor se adapte a tus objetivos musicales
        </p>

        {/* Banner de cupos limitados */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">Cupos Limitados</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: totalSpots }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i < takenSpots ? 'bg-muted-foreground/40' : 'bg-accent'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="text-accent font-bold">{availableSpots}</span> de {totalSpots} disponibles
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" />
              Reservá tu lugar para este periodo
            </p>
          </div>
        </div>

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
              {pkg.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  {pkg.badge}
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-accent">{pkg.priceUSD}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">o {pkg.priceGS} en Paraguay</p>
                <p className="text-xs text-muted-foreground">{pkg.duration}</p>
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
