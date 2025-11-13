/**
 * Converte uma data para o formato "DD/MM/YYYY".
 * Aceita tanto strings no formato "YYYY-MM-DD" quanto "YYYY-MM-DDTHH:mm:ss.sssZ".
 *
 * @param data String ou Date representando a data.
 * @returns Data formatada no padrão brasileiro ("DD/MM/YYYY").
 */
export function formatarDataReverso(data: string | Date): string {
  if (!data) return "";

  // Se já for um objeto Date, usa diretamente
  const dateObj = data instanceof Date ? data : new Date(data);

  // Valida se é uma data válida
  if (isNaN(dateObj.getTime())) {
    return "";
  }

  const dia = String(dateObj.getDate()).padStart(2, "0");
  const mes = String(dateObj.getMonth() + 1).padStart(2, "0");
  const ano = dateObj.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
