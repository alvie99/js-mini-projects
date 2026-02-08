let pisteet = Number(prompt("Anna pistenmäärä (0-40)"));

let tulosDiv = document.getElementById("tulos");

if (pisteet < 0 || pisteet > 40) {
  tulosDiv.textContent = "Pistemäärä ei välillä 0-40";
} else if (pisteet < 15) {
  tulosDiv.textContent = "Arvosana: tyydyttävä";
} else if (pisteet <= 30) {
  tulosDiv.textContent = "Arvosana: hyvä";
} else {
  tulosDiv.textContent = "Arvosana: kiitettävä";
}

let pisteetDiv = document.getElementById("pisteet");
pisteetDiv.textContent = `Pistemäärä: ${pisteet}`;

let hinta = parseFloat(prompt("Anna ostoksen hinta"));
let alennusprosentti = 0;

if (hinta >= 100) {
  alennusprosentti = 20;
} else if (hinta >= 50) {
  alennusprosentti = 10;
} else {
  alennusprosentti = 0;
}

let alennus = (hinta * alennusprosentti) / 100;
let loppuhinta = hinta - alennus;

let alhintaDiv = document.getElementById("alennetusHinta");
alhintaDiv.innerHTML = `
    <p>Alkuperäinen hinta: ${hinta.toFixed(2)} €</p>
    <p>Alennusprosentti: ${alennusprosentti}%</p>
    <p>Alennus: ${alennus.toFixed(2)} €</p>
    <p>Loppuhinta: ${loppuhinta.toFixed(2)} €</p>
    `;
