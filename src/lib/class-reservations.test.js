import { describe, expect, test } from "bun:test";
import { getClassReservationUrl } from "./class-reservations";

describe("Reservas por WhatsApp", () => {
  test.each([
    ["Paquete Mensual", "Hola, quiero reservar el Paquete Mensual"],
    ["Clase Individual", "Hola, quiero reservar la Clase Individual"],
    ["Combo Doble", "Hola, quiero reservar el Combo Doble"],
  ])("envía el mensaje de %s al profesor", (plan, message) => {
    const url = new URL(getClassReservationUrl(plan));
    expect(url.origin + url.pathname).toBe("https://wa.me/595971664878");
    expect(url.searchParams.get("text")).toBe(message);
  });
});