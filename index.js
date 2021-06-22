
import { clientes } from "./lista.js";

const ocultarColumnas = ["pets", "user", "updatedAt" , "email"];

export const generarTitulos = () => {
  const objeto = clientes[0]; // Primer objeto de la lista
  const headers = Object.keys(objeto);
  const response = ["<tr>"];
  headers
    .filter((nombreColumna) => !ocultarColumnas.includes(nombreColumna))
    .forEach((nombreColumna) => response.push(`<th>${nombreColumna}</th>`));
  response.push("</tr>");
  return response.join("");
};

export const generarTabla = () => {
  const objeto = clientes[0];
  const headers = Object.keys(objeto); // ['name',  'edad', etc.]
  const response = [`<tr>`];
  clientes.forEach((objeto) => {
    headers
      .filter((nombreColumna) => !ocultarColumnas.includes(nombreColumna))
      .forEach((campo) => {
        response.push(`<td>${objeto[campo]}</td>`);
      });
    response.push(`</tr>`);
  });
  return response.join("");
};