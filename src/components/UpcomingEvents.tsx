import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    date: "Agosto 2025",
    title: "Jornadas de Flauta Traversa e Instrumentos de Viento Madera",
    location: "Asunción, Paraguay",
    description: "Charlas y clases magistrales con maestros internacionales. Talleres de mantenimiento para flauta traversa e instrumentos de madera.",
    tags: ["Masterclass", "Taller", "Viento Madera"],
    status: "confirmed" as const,
  },
];

const statusLabels = {
  confirmed: "Confirmado",
  tentative: "Por confirmar",
};

const statusColors = {
  confirmed: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30",
  tentative: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
};

export const UpcomingEvents = () => {
  return (
    <section id="proximos-eventos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Próximos Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actividades y eventos en los que estaré participando próximamente
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {events.length > 0 ? (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {events.map((event, index) => (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0 z-10">
                        <CalendarDays className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Event card */}
                    <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-primary flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${statusColors[event.status]}`}>
                          {statusLabels[event.status]}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>

                      <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-3">
                        <MapPin className="w-4 h-4 shrink-0" />
                        {event.location}
                      </p>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Próximamente se anunciarán nuevos eventos.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
