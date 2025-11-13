/**
 * Formata um CNPJ no padrão 00.000.000/0000-00.
 * @param value String representando o CNPJ.
 * @returns CNPJ formatado ou string parcial enquanto digita.
 */
export function formatarCnpj(value: string): string {
  const digits = value.replace(/\D/g, "").substring(0, 14);

  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return digits.replace(/^(\d{2})(\d{0,3})/, "$1.$2");
  if (digits.length <= 8)
    return digits.replace(/^(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
  if (digits.length <= 12)
    return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4})/, "$1.$2.$3/$4");
  return digits.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2}).*/,
    "$1.$2.$3/$4-$5"
  );
}
