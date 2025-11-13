/**
 * Converte uma data no formato "YYYY-MM-DD" para "DD/MM/YYYY".
 * @param data String representando a data (ex: "2025-11-13").
 * @returns Data formatada no padrão brasileiro.
 */
export function formatarDataReverso(data: string): string {
  if (!data || !data.includes("-")) return data;
  return data.split("-").reverse().join("/");
}
