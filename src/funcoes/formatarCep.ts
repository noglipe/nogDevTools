/**
 * Formata um CEP para o padrão 00000-000.
 * @param value Valor do CEP (string ou número).
 * @returns CEP formatado no padrão 00000-000 ou string vazia se inválido.
 */
export function formatarCep(value: string | number): string {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (digits.length === 0) return "";
  return digits.replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);
}
