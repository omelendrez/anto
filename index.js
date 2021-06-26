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
  const response = ["<tr>"];
  rows.forEach((objeto) => {
    headers
      .filter((nombreColumna) => !ocultarColumnas.includes(nombreColumna))
      .forEach((campo) => {
        response.push(`<td>${objeto[campo]}</td>`);
      });
    response.push("</tr>");
  });
  return response.join("");
};

export const loadData = (page = 1) => {
  fetch(
    `https://vmr.herokuapp.com/api/consultations?limit=5&page=${page}`
  ).then((response) =>
    response.json().then((data) => {
      const rows = data.consultations.rows;
      document.querySelector(".table thead").innerHTML = generarTitulos(rows);
      document.querySelector(".table tbody").innerHTML = generarTabla(rows);
      document.getElementById("pageNumber").innerText = page;
    })
  );
};
