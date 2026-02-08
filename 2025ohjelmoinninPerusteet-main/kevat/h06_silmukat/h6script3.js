const number = 10;

function startgame() {
  while (true) {
    let arvaus = Number(prompt("Arvaa luku välillä 1-50 (0 lopettaa): "));
    if (arvaus === number || arvaus === 0) {
      alert("Oikein! Arvasit luvun.");
      break;
    } else if (arvaus < number) {
      alert("Lukusi on liian pieni.");
    } else {
      alert("Lukusi on liian suuri.");
    }
  }
}
