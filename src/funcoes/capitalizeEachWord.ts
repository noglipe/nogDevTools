/**
 * Capitaliza cada palavra em uma string.
 * Transforma a primeira letra de cada palavra em maiúscula e o restante em minúscula.
 * @param str String a ser formatada; aceita `undefined` ou `null`. Se for falsy, retorna string vazia.
 * @returns String com cada palavra capitalizada.
 */
export function capitalizeEachWord(str: string | undefined | null): string {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
