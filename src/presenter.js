import sumar from "./sumador";
import { prepararFrase } from "./contador";
const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let frase = first.value;
  let nuevaFrase = prepararFrase(frase);

  div.innerHTML = "<p>" + nuevaFrase + "</p>";
});
