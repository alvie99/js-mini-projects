let a = Number(prompt("Anna ensimmäinen luku: "));
let b = Number(prompt("Anna toinen luku: "));

let summa = a + b;
let erotus = a - b;
let tulo = a * b;
let osamaara = a / b;

let tulosDiv = document.getElementById("tulos");

tulosDiv.innerHTML = `
    <p>${a} + ${b} = ${summa}</p>
    <p>${a} - ${b} = ${erotus}</p>
    <p>${a} * ${b} = ${tulo}</p>
    <p>${a} / ${b} = ${osamaara}</p>
    `;

function kasvata() {
  let lukuDiv = document.getElementById("luku");
  let arvo = Number(lukuDiv.textContent);
  arvo++;
  lukuDiv.textContent = arvo;
}

function pienenna() {
  let lukuDiv = document.getElementById("luku");
  let arvo = Number(lukuDiv.textContent);
  arvo--;
  lukuDiv.textContent = arvo;
}
