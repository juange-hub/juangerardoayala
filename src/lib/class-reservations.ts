export const getClassReservationUrl = (plan: string) =>
  `https://wa.me/595971664878?text=${encodeURIComponent(`Hola, quiero reservar ${plan === "Clase Individual" ? "la" : "el"} ${plan}`)}`;