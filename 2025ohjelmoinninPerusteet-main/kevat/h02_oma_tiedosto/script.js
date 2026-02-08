"use strict";

document.getElementsByTagName("p")[0].textContent =
  "Linkkasin JavaScript-tiedoston oikein!";

("use strict");
let globaaliMuuttuja = "Hei maailma!";

function scopeTesti() {
  let funktioMuuttuja = "Hei, olen funktiomuuttuja!";

  console.log("Paikallinen muuttuja funktiossa:", funktioMuuttuja);

  globaaliMuuttuja =
    "Globaalin muuttujan arvoa voi muokata myös funktion sisällä!";
}

console.log("GlobaaliMuuttuja ennen funktion kutsua:", globaaliMuuttuja);

scopeTesti();

console.log("GlobaaliMuuttuja funktion kutsun jälkeen:", globaaliMuuttuja);




const otsikko = document.querySelector("h2");
otsikko.textContent = "Ivan Astashov";

const teksti = document.getElementById("keltainen");
teksti.style.color = "green";

document.getElementById("yksi").textContent = "Sushi";
document.getElementById("kaksi").textContent = "Pizza";
document.getElementById("kolme").textContent = "Pasta";

const laatikko = document.getElementById("laatikko");
laatikko.style.backgroundColor = "#e1a0a0";
