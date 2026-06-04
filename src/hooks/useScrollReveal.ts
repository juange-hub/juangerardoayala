import { useEffect } from "react";

/**
 * Observa todas las <section> de la página y les agrega la clase
 * `is-revealed` cuando entran al viewport. Funciona en mobile, tablet y desktop.
 * Respeta `prefers-reduced-motion`.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = Array.from(document.querySelectorAll("section"));

    if (prefersReduced) {
      sections.forEach((s) => s.classList.add("is-revealed"));
      return;
    }

    sections.forEach((s) => {
      if (s.id === "hero") {
        s.classList.add("is-revealed");
      } else {
        s.classList.add("reveal-on-scroll");
        // Auto-stagger: aplica cascada a hijos directos de grillas y listas
        s.querySelectorAll(".grid, ul, ol").forEach((g) =>
          g.classList.add("stagger-group")
        );
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    sections
      .filter((s) => s.id !== "hero")
      .forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);
};
