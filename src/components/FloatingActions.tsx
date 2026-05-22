import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Acciones flotantes (todos los tamaños):
 *  - WhatsApp directo
 *  - Volver arriba (aparece después de scroll)
 */
export const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="flex fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex-col items-end gap-2 md:gap-3">
      <a
        href="https://wa.me/595971664878?text=Hola%2C%20me%20gustar%C3%ADa%20contactarte"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Volver arriba"
        className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
};
