const esDiferente = (edad, tope) => {
  if (esMenor(edad, tope)) {
    console.log("Es menor");
  }
  if (esMayor(edad, tope)) {
    console.log("Es mayor");
  }
  if (!esMayor(edad, tope) && !esMenor(edad, tope)) {
    console.log("Es igual");
  }
};

const esMayor = (edad, maximo) => edad > maximo;
const esMenor = (edad, maximo) => edad < maximo;

const edad = 27;
const tope = 27;

esDiferente(edad, tope);
