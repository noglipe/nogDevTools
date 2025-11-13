/**
 * Converte uma data para o formato "DD/MM/YYYY".
 * Aceita:
 *  - Objeto Date (usa toISOString)
 *  - String no formato "YYYY-MM-DD" ou "YYYY-MM-DDTHH:mm:ss.sssZ"
 *
 * @param data Data no formato string ou Date.
 * @returns Data formatada no padrão brasileiro ("DD/MM/YYYY").
 */
export function formatarDataPrisma(data: string | Date): string {
  if (!data) return "";

  let dataStr: string;

  // Se for um objeto Date → converte para ISO string
  if (data instanceof Date) {
    dataStr = data.toISOString().slice(0, 10); // "YYYY-MM-DD"
  } else if (typeof data === "string") {
    // Se for string → pega apenas os 10 primeiros caracteres
    dataStr = data.slice(0, 10); // Garante "YYYY-MM-DD"
  } else {
    return "";
  }

  return dataStr.split("-").reverse().join("/");
}
