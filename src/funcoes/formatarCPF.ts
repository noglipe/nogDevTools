/**
 * Formata um CPF no padrão 000.000.000-00.
 * @param value String ou número representando o CPF.
 * @returns CPF formatado ou string vazia se inválido.
 */
export function formatarCpf(value: string | number): string {
  const digits = String(value ?? "")
    .replace(/\D/g, "")
    .slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length < 11) return digits;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(
    6,
    9
  )}-${digits.slice(9, 11)}`;
}
