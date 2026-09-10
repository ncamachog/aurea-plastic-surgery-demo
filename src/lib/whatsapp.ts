export const WHATSAPP_NUMBER = "573103351883";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const AGENDAR_MESSAGE =
  "Hola, me gustaría agendar una consulta en Aurea Plastic Surgery.";
