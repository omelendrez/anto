const ignorarNombres = ["jose"];

const lista = ["jose", "pepe"];

const listaNueva = lista
  .filter((nombre) => {
    if (!ignorarNombres.includes(nombre)) {
      return nombre;
    }
  })
  .map((nombre) => nombre);

const objeto = {
  name: "Pepe",
  edad: 25,
};

const nombreColumna = "edad";
const valor = objeto[nombreColumna];
// const valor = object.edad // Es lo mismo
valor;
