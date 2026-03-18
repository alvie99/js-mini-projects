const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const numInput = document.getElementById("num");
const tarkista = document.getElementById("tarkista");
const tyhjenna = document.getElementById("tyhjenna");
const tulosTeksti = document.getElementById("tulosTeksti");

function tarkistaLuku(luku, alaraja, ylaraja) {
  if (
    !Number.isInteger(luku) ||
    !Number.isInteger(alaraja) ||
    !Number.isInteger(ylaraja)
  ) {
    throw new Error("Anna parametreina vain lukuja.");
  }

  if (luku < alaraja) {
    throw new Error("Liian pieni.");
  }

  if (luku > ylaraja) {
    throw new Error("Liian suuri.");
  }

  return luku;
}

function tarkistus() {
  try {
    const minRaw = minInput.value.trim();
    const maxRaw = maxInput.value.trim();
    const numRaw = numInput.value.trim();

    if (!numRaw || !minRaw || !maxRaw) {
      throw new Error("Anna parametreina vain lukuja.");
    }

    const min = Number(minRaw);
    const max = Number(maxRaw);
    const num = Number(numRaw);

    const tulos = tarkistaLuku(num, min, max);
    tulosTeksti.textContent = `Hyväksyttiin luku (${tulos})`;
  } catch (virhe) {
    tulosTeksti.textContent = `VIRHE: ${virhe.message}`;
  }
}

function tyhjennaKentat() {
  minInput.value = "";
  maxInput.value = "";
  numInput.value = "";
  tulosTeksti.textContent = "";
}

tarkista.addEventListener("click", tarkistus);
tyhjenna.addEventListener("click", tyhjennaKentat);
