/**
 * Remove todos os caracteres não numéricos de uma string.
 * @param value String contendo caracteres diversos.
 * @returns Somente os números da string.
 */
export function retornarNumeros(value: string | null | undefined): string {
  if (!value) return "";
  return String(value).replace(/\D/g, "");
}
