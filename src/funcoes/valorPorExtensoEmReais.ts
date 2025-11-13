/**
 * Converte um valor numérico em seu equivalente por extenso em reais.
 * @param valor Valor numérico (ou string numérica).
 * @returns Valor por extenso em reais e centavos.
 */
export function valorPorExtensoEmReais(valor: number | string): string {
  const unidades = [
    "",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "quatorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
  ];
  const dezenas = [
    "",
    "",
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ];
  const centenas = [
    "",
    "cem",
    "duzentos",
    "trezentos",
    "quatrocentos",
    "quinhentos",
    "seiscentos",
    "setecentos",
    "oitocentos",
    "novecentos",
  ];

  const milhar = ["real", "mil", "milhão", "bilhão", "trilhão"];
  const plural = ["reais", "mil", "milhões", "bilhões", "trilhões"];

  let numero = parseFloat(String(valor).replace(",", "."));
  if (isNaN(numero)) return "Valor inválido";

  const [parteInteira, parteDecimal] = numero.toFixed(2).split(".").map(Number);

  const converteGrupo = (n: number): string => {
    if (n === 0) return "";
    if (n < 20) return unidades[n];
    if (n < 100) {
      const dezena = Math.floor(n / 10);
      const resto = n % 10;
      return resto
        ? `${dezenas[dezena]} e ${unidades[resto]}`
        : dezenas[dezena];
    }
    if (n < 1000) {
      const centena = Math.floor(n / 100);
      const resto = n % 100;
      if (n === 100) return "cem";
      return resto
        ? `${centenas[centena]} e ${converteGrupo(resto)}`
        : centenas[centena];
    }
    return "";
  };

  const grupos: number[] = [];
  let inteiro = parteInteira;
  while (inteiro > 0) {
    grupos.unshift(inteiro % 1000);
    inteiro = Math.floor(inteiro / 1000);
  }

  const extensoReais = grupos
    .map((grupo, i) => {
      if (grupo === 0) return "";
      const nome =
        grupos.length - i === 1
          ? grupo === 1
            ? milhar[0]
            : plural[0]
          : grupo === 1
          ? milhar[grupos.length - i - 1]
          : plural[grupos.length - i - 1];
      return `${converteGrupo(grupo)} ${nome}`;
    })
    .filter(Boolean)
    .join(" e ");

  const extensoCentavos =
    parteDecimal > 0
      ? `${converteGrupo(parteDecimal)} ${
          parteDecimal === 1 ? "centavo" : "centavos"
        }`
      : "";

  if (!extensoReais && extensoCentavos)
    return `${extensoCentavos.charAt(0).toUpperCase()}${extensoCentavos.slice(
      1
    )}`;
  if (extensoReais && !extensoCentavos)
    return `${extensoReais.charAt(0).toUpperCase()}${extensoReais.slice(1)}`;
  if (extensoReais && extensoCentavos)
    return `${extensoReais.charAt(0).toUpperCase()}${extensoReais.slice(
      1
    )} e ${extensoCentavos}`;
  return "Zero real";
}
