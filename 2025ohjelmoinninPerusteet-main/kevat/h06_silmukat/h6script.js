let luku = Number(prompt("Anna luku: "));
document.getElementById("luku").textContent = luku;

function vaihdaLuku() {
  luku = Number(prompt("Anna luku: "));
  document.getElementById("luku").textContent = luku;
}

function parillisetLuvut() {
  document.getElementById("luku").textContent = "";
  for (let i = 0; i <= luku; i += 2) {
    if (i > 0) {
      document.getElementById("luku").textContent += i + " ";
    }
  }
}

function x10() {
  document.getElementById("luku").textContent = "";
  let tulos = "";

  for (let i = 1; i <= 10; i++) {
    tulos += (luku / 10) * i;
    if (i < 10) {
      tulos += ", ";
    }
  }
  document.getElementById("luku").textContent = tulos;
}
