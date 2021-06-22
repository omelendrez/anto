const ocultarColumnas = ["pets", "user", "updatedAt", "email"];

export const generarTitulos = (rows) => {
  const objeto = rows[0]; // Primer objeto de la lista
  const headers = Object.keys(objeto);
  const response = ["<tr>"];
  headers
    .filter((nombreColumna) => !ocultarColumnas.includes(nombreColumna))
    .forEach((nombreColumna) => response.push(`<th>${nombreColumna}</th>`));
  response.push("</tr>");
  return response.join("");
};

export const generarTabla = (rows) => {
  const objeto = rows[0];
  const headers = Object.keys(objeto); // ['name',  'edad', etc.]
  const response = [`<tr>`];
  rows.forEach((objeto) => {
    headers
      .filter((nombreColumna) => !ocultarColumnas.includes(nombreColumna))
      .forEach((campo) => {
        response.push(`<td>${objeto[campo]}</td>`);
      });
    response.push(`</tr>`);
  });
  return response.join("");
};
