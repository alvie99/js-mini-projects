const showTime = document.getElementById("showTime");
const timeOutput = document.getElementById("timeOutput");

showTime.addEventListener("click", () => {
  const now = new Date();
  timeOutput.textContent = now;
});

const clickBox = document.getElementById("clickBox");

clickBox.addEventListener("click", () => {
  clickBox.textContent = "Kiitos!";
});

const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.textContent = "Kiitos!";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.textContent = "Siirrä kursori tänne!";
});

const doubleClick = document.getElementById("dbclickBox");

doubleClick.addEventListener("dblclick", () => {
  doubleClick.textContent = "Kiitos!";
});
