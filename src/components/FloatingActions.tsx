import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

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
    <div className="flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
      <a
        href="https://wa.me/595971664878?text=Hola%2C%20me%20gustar%C3%ADa%20contactarte"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Volver arriba"
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
