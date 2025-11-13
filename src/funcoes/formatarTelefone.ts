/**
 * Formata um telefone fixo ou celular, ajustando o formato conforme o número de dígitos.
 * @param value String ou número representando o telefone.
 * @returns Telefone formatado.
 */
export function formatarTelefone(value: string | number): string {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (!digits) return "";

  if (digits.length <= 10)
    return digits.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3").trim();

  return digits.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3").trim();
}
