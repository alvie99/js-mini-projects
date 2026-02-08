"use strict";
let globaaliMuuttuja = "Hei maailma!";

function scopeTesti() {
  let funktioMuuttuja = "Hei, olen Ivan Astashov!";

  console.log("Paikallinen muuttuja funktiossa:", funktioMuuttuja);

  globaaliMuuttuja =
    "Globaalin muuttujan arvoa voi muokata myös funktion sisällä!";
}

console.log("GlobaaliMuuttuja ennen funktion kutsua:", globaaliMuuttuja);

scopeTesti();

console.log("GlobaaliMuuttuja funktion kutsun jälkeen:", globaaliMuuttuja);

console.log(funktioMuuttuja); // Tämä aiheuttaa virheen, koska funktioMuuttuja ei ole määritelty tässä kontekstissa