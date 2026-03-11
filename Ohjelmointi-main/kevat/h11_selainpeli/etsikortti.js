korttitaulukko = ["X", "X", "X", "X", "X", "X", "X", "X", "&hearts;"];
let yritykset = 4;
let viestiElementti = document.querySelector("#viesti");

function sekoitaKortit(korttitaulukko) {
  for (let i = taulukko.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    (([taulukko[i], taulukko[j]] = [taulukko[j]]), [taulukko[i]]);
  }
}

sekoitaKortit(korttitaulukko);

function kaannaKortti(tapahtuma) {
  let kortti = tapahtuma.target;
  let indeksi = kortti.getAttribute("data-id") - 1;
  kortti.innerHTML = korttitaulukko[indeksi];

  if (korttitaulukko[indeksi] === "&hearts;") {
    document.querySelector("#viesti").textContent = "Voitit!";
    document.querySelectorAll(".kortti").forEach(function (kortti) {
      kortti.removeEventListener("click", kaannaKortti);
    });
  } else {
    yritykset -= 1;
    if (yritykset === 0) {
      document.querySelector("#viesti").textContent = "Hävisit!";
      document.querySelectorAll(".kortti").forEach(function (kortti) {
        kortti.removeEventListener("click", kaannaKortti);
      });
    } else {
      document.querySelector("#viesti").textContent =
        "Yrityksiä jäljellä: " + yritykset;
    }
  }
}

kortti.removeEventListener("click", kaannaKortti);

document.querySelectorAll(".kortti").forEach(function (kortti) {
  kortti.addEventListener("click", kaannaKortti);
});
