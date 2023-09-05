import { probarPalabras, prepararFrase } from "./contador";

describe("Sumar", () => {
    it("deberia sumar dos numeros", () => {
      expect(prepararFrase("Hola mundo")).toEqual(["Hola","mundo"]);
    });
  });
