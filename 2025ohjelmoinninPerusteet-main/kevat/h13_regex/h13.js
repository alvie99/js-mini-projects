function tarkistaMaakoodi() {
  let maakoodi = document.getElementById("maakoodiInput").value;
  const maakoodinMuoto = /^[A-Z]|[a-z]{3}$/g;

  if (maakoodinMuoto.test(maakoodi)) {
    document.getElementById("maakoodibox").style.color = "green";
    document.getElementById("maakoodiInput").value = maakoodi.toUpperCase();
    console.log(`Maakoodi ${maakoodi} on oikean muotoinen.`);
  } else {
    document.getElementById("maakoodibox").style.color = "red";
    console.log(`Maakoodi ${maakoodi} ei ole oikean muotoinen.`);
  }
}

document
  .getElementById("maakoodibox")
  .addEventListener("click", tarkistaMaakoodi);

function tarkistaNimi() {
  let nimi = document.getElementById("nameinput").value;
  const nimimuoto = /^[A-Z][a-z]+(?:-[A-Z][a-z]+)*$/;

  if (nimimuoto.test(nimi)) {
    document.getElementById("namebox").style.color = "green";
    console.log(`Nimi ${nimi} on oikean muotoinen.`);
  } else {
    document.getElementById("namebox").style.color = "red";
    console.log(`Nimi ${nimi} ei ole oikean muotoinen.`);
  }
}

document.getElementById("namebox").addEventListener("click", tarkistaNimi);

document
  .getElementById("sensuroitavaInput")
  .addEventListener("input", sensuroida);

function sensuroida() {
  const kirosanat = [
    //englanti
    /sh{1,}i{1,}t/gi,
    /fu{1,}c{1,}k/gi,
    /bi{1,}t{1,}c{1,}h/gi,
    /di{1,}c{1,}k/gi,
    /c{1,}r{1,}a{1,}p/gi,
    /b{1,}a{1,}s{1,}t{1,}a{1,}r{1,}d/gi,
    /c{1,}u{1,}n{1,}t/gi,
    /nig{1,}/gi,
    /p{1,}u{1,}s{1,}s{1,}y/gi,
    /c\?ck/gi,
    /fag\?got/gi,
    //suomi
    /v{1,}i{1,}t{1,}u/gi,
    /p{1,}e{1,}r{1,}s{1,}e/gi,
    /p{1,}e{1,}r{1,}k{1,}e{1,}l{1,}e/gi,
    /s{1,}a{1,}t{1,}a{1,}n/gi,
    /p{1,}a{1,}s{1,}k{1,}a/gi,
  ];
  let teksti = document.getElementById("sensuroitavaInput").value;
  for (let i = 0; i < kirosanat.length; i++) {
    const regex = new RegExp(kirosanat[i]);
    teksti = teksti.replace(regex, "****");
  }
  document.getElementById("sensuroitavaInput").value = teksti;
}
