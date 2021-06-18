// array - arreglos (matrices)

const palabra = "neuquen";

const sinEspaciosNiComas = palabra.toLocaleLowerCase();

const palabraInversa = sinEspaciosNiComas.split("").reverse().join("");

if (sinEspaciosNiComas === palabraInversa) {
  console.log("Es capicúa");
} else {
  console.log("No es capicúa");
}

palabraInversa;

/*
const listaFrutas = ["banana", "manzana", "melon", "frutilla"];

console.log("listaFrutas", listaFrutas);

const frutas = listaFrutas.join(" | ");

console.log("frutas", frutas);

const nuevaLista = frutas.split(" | ");

console.log("nuevaLista", nuevaLista);
let productos = ["OMAR", 5, true, 123, 456, 789];

let buscar = "omar";

let minuscula = buscar.toUpperCase();

let posicion = productos.indexOf(minuscula);

productos.splice(posicion, 1);

console.log(productos);

console.log("Lista original", productos);

const eliminados = productos.slice(2, 4);

console.log("Lista modificada", productos);

console.log("Eliminados", eliminados);



productos.shift();

// productos.unshift("pepe");

/*
productos.pop(); 

productos.pop();
*/

/*
const inserted = productos.push("pepe");

console.log(productos[inserted - 1]);

producto.forEach(function (elemento, indice, array) {
  if (elemento === 123) {
    console.log(indice);
  }
});
*/
