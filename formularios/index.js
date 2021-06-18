export const suma = (valor1, valor2) => valor1 + valor2;

export const resta = (valor1, valor2) => valor1 - valor2;

export const multiplica = (valor1, valor2) => valor1 * valor2;

export const divide = (valor1, valor2) => valor1 / valor2;

export const eleva = (valor1, valor2) => valor1 ** valor2;

export const generarDiv = (listaResultados) =>
  listaResultados
    .map((resultado) => `<div class="resultado">${resultado}</div>`)
    .join("");
