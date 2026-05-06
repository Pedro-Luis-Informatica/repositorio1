// bucle while

// let contador = 0;

// while (contador < 100000) {
//   console.log("Numero de iteraciones: ", contador);
//   contador++;
//   // contador = contador + 1;
// }

// while (contador > 0) {
//   console.log("Numero de iteraciones: ", contador);
//   contador--;
//   // contador = contador - 1;
// }

// let contador = 0;
// while (contador != 7) {
//   contador = Math.floor(Math.random() * 10) + 1;
//   console.log(`Salio el: ${contador}`);
// }

// let palabraMagica = "";

// while (palabraMagica !== "gato") {
//   palabraMagica = prompt("Adivina la palabra secreta: ").toLocaleLowerCase();
//   if (palabraMagica !== "gato") {
//     alert("Incorrecto, intenta nueva vez 😢");
//   }
// }

// alert("Correcto, felicidades te ganaste un premio 👍");

let contador = 100;

while (contador > 0) {
  document.write(`Solo faltan ${contador} pasos por caminar <br>`);
  contador--;
}
