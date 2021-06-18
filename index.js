import { lista } from "./lista.js";

export const generarTitulos = () => {
  const objeto = lista[0];
  const headers = Object.keys(objeto);
  let response = ["<tr>"];
  headers.forEach((prop) => response.push(`<th>${prop}</th>`));
  response.push("</tr>");
  return response.join("");
};

export const generarTabla = () => {
  const objeto = lista[0];
  const headers = Object.keys(objeto);
  let response = [`<tr>`];
  lista.forEach((objeto) => {
    headers.forEach((campo) => {
      response.push(`<td>${objeto[campo]}</td>`);
    });
    response.push(`</tr>`);
  });
  return response.join("");
};
