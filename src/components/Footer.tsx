import { Mail, Phone, MapPin, Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Juan Gerardo Ayala</h3>
            </div>
            <p className="text-primary-foreground/80">
              Flautista profesional, docente y líder gremial
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:juanayalaflute@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-[var(--transition-smooth)]">
                <Mail className="w-5 h-5" />
                <span>juanayalaflute@gmail.com</span>
              </a>
              <a href="tel:+595971664878" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-[var(--transition-smooth)]">
                <Phone className="w-5 h-5" />
                <span>+595 971 664878</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>Asunción, Paraguay</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Juan Gerardo Ayala. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
