const dateInput = document.querySelector("#getdate");
const checkButton = document.querySelector("#button1");
const dateResult = document.querySelector("#dateResult");
const clock = document.querySelector("#clock");

//t 1
checkButton.addEventListener("click", () => {
  if (!dateInput.value) {
    dateResult.textContent = "Valitse päivä.";
    return;
  }

  const selectedDate = new Date(dateInput.value);
  const today = new Date();

  // remove time part (compare by calendar day only)
  selectedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffMs = selectedDate - today;
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    dateResult.textContent = "Valisemani päivä on tänään";
  } else if (diffDays > 0) {
    dateResult.textContent = `Valitsemani päivä on ${diffDays} päivä päästä.`;
  } else {
    dateResult.textContent = `Valitsemasi päivä oli ${Math.abs(diffDays)} päivää sitten.`;
  }
});

//t 2
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  clock.textContent = `${hh}:${mm}`;
}

updateClock();
setInterval(updateClock, 60 * 1000);
