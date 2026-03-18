const ageForm = document.querySelector("#ageForm");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const yearsOutput = document.querySelector("#years");
const monthsOutput = document.querySelector("#months");
const daysOutput = document.querySelector("#days");

// Output helpers
function setOutputColor(color) {
  yearsOutput.style.color = color;
  monthsOutput.style.color = color;
  daysOutput.style.color = color;
}

function showInvalidState() {
  yearsOutput.textContent = "--";
  monthsOutput.textContent = "--";
  daysOutput.textContent = "--";
  setOutputColor("hsl(0, 100%, 67%)");
}

function showValidState(years, months, days) {
  yearsOutput.textContent = years;
  monthsOutput.textContent = months;
  daysOutput.textContent = days;
  setOutputColor("green");
}

// Submit: validate -> calculate -> render
ageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dayStr = dayInput.value.trim();
  const monthStr = monthInput.value.trim();
  const yearStr = yearInput.value.trim();

  // 1) Required check
  if (!dayStr || !monthStr || !yearStr) {
    alert("Please fill in all fields.");
    showInvalidState();
    return;
  }

  const dayRe = /^(0?[1-9]|[12][0-9]|3[01])$/;
  const monthRe = /^(0?[1-9]|1[0-2])$/;
  const yearRe = /^(19\d{2}|20\d{2})$/;

  // 2) Format check
  if (!dayRe.test(dayStr) || !monthRe.test(monthStr) || !yearRe.test(yearStr)) {
    alert("Wrong format. Use DD MM YYYY with valid ranges.");
    showInvalidState();
    return;
  }

  const day = Number(dayStr);
  const month = Number(monthStr);
  const year = Number(yearStr);
  const birthDate = new Date(year, month - 1, day);

  // 3) Real date check
  const isRealDate =
    birthDate.getFullYear() === year &&
    birthDate.getMonth() === month - 1 &&
    birthDate.getDate() === day;

  if (!isRealDate) {
    alert("Invalid calendar date.");
    showInvalidState();
    return;
  }

  const today = new Date();
  // 4) Future date check
  if (birthDate > today) {
    alert("Birth date cannot be in the future.");
    showInvalidState();
    return;
  }

  let years = today.getFullYear() - year;
  let months = today.getMonth() - (month - 1);
  let days = today.getDate() - day;

  // Normalize negative day/month differences
  if (days < 0) {
    const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInPrevMonth;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  showValidState(years, months, days);
});
