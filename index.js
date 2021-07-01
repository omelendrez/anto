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

export const loadData = ({ page, records, search, model }) => {
  fetch(
    `https://vmr.herokuapp.com/api/${model}?limit=${records}&page=${page}&filter=${search}`
  ).then((response) =>
    response.json().then((data) => {
      /**
       * ejemplo de cómo viene la data:
       *
       * 
       * customers: {
            "count": 730,
            "rows": [
                {
                    "id": 7454,
                    "name": "MARIELA MUZZIO",
                    "address": "Sixto laxpiur 3434",
                    "phone": "2915119035",
                    "email": "",
                    "observations": "",
                    "balance": 0,
                    "updatedAt": "2021-06-30T22:01:19.000Z",
                    "pets": [
                        {
                            "id": 9364,
                            "name": "TEODORO",
                            "statusId": 1
                        }
                    ],
                    "user": {
                        "name": "angie"
                    }
                },

              ]
      } 
       *  */

      const modelData = data[model];
      const rows = modelData.rows;
      document.querySelector(".table thead").innerHTML = generarTitulos(rows);
      document.querySelector(".table tbody").innerHTML = generarTabla(rows);
      document.getElementById("pageNumber").innerText = page;
      document.getElementById("totalRecords").innerText = modelData.count;
    })
  );
};
