import { lista } from "./lista.js";

const ocultarColumnas = ["edad", "apellido"];

export const generarTitulos = () => {
  const objeto = lista[0]; // Primer objeto de la lista
  const headers = Object.keys(objeto);
  const response = ["<tr>"];
  headers
    .filter((nombreColumna) => !ocultarColumnas.includes(nombreColumna))
    .forEach((nombreColumna) => response.push(`<th>${nombreColumna}</th>`));
  response.push("</tr>");
  return response.join("");
};

export const generarTabla = () => {
  const objeto = lista[0];
  const headers = Object.keys(objeto); // ['name',  'edad', etc.]
  const response = [`<tr>`];
  lista.forEach((objeto) => {
    headers
      .filter((nombreColumna) => !ocultarColumnas.includes(nombreColumna))
      .forEach((nombreColumna) => {
        response.push(`<td>${objeto[nombreColumna]}</td>`);
      });
    response.push(`</tr>`);
  });
  return response.join("");
};
