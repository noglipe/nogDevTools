/**
 * Formata um número de celular ou telefone fixo para o padrão (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.
 * @param value String ou número representando o telefone.
 * @returns Telefone formatado.
 */
export function formatarCelular(value: string | number): string {
  const digits = String(value ?? "")
    .replace(/\D/g, "")
    .slice(0, 11);
  if (!digits) return "";

  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
