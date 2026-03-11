// Improved version:
// - inline prompt (no alert)
// - input highlight (valid / invalid)
// - age output color by state

const ageForm = document.querySelector("#ageForm");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const yearsOutput = document.querySelector("#years");
const monthsOutput = document.querySelector("#months");
const daysOutput = document.querySelector("#days");
const promptOutput = document.querySelector("#prompt");

// Inputs group
const allInputs = [dayInput, monthInput, yearInput];

// Output helpers
function setOutputColor(color) {
  yearsOutput.style.color = color;
  monthsOutput.style.color = color;
  daysOutput.style.color = color;
}

function setPrompt(message, isError = true) {
  promptOutput.textContent = message;
  promptOutput.className = isError ? "prompt-error" : "prompt-success";
}

function clearInputState(input) {
  input.classList.remove("input-valid", "input-invalid");
}

function markInput(input, isValid) {
  input.classList.remove("input-valid", "input-invalid");
  input.classList.add(isValid ? "input-valid" : "input-invalid");
}

function resetInputStates() {
  allInputs.forEach(clearInputState);
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

// Submit flow: validate -> calculate -> render
ageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resetInputStates();

  const dayStr = dayInput.value.trim();
  const monthStr = monthInput.value.trim();
  const yearStr = yearInput.value.trim();

  // 1) Required check
  if (!dayStr || !monthStr || !yearStr) {
    if (!dayStr) markInput(dayInput, false);
    if (!monthStr) markInput(monthInput, false);
    if (!yearStr) markInput(yearInput, false);
    setPrompt("Error: please fill in all fields.");
    showInvalidState();
    return;
  }

  // 2) Format check
  const dayRe = /^(0?[1-9]|[12][0-9]|3[01])$/;
  const monthRe = /^(0?[1-9]|1[0-2])$/;
  const yearRe = /^(19\d{2}|20\d{2})$/;

  const dayOk = dayRe.test(dayStr);
  const monthOk = monthRe.test(monthStr);
  const yearOk = yearRe.test(yearStr);

  markInput(dayInput, dayOk);
  markInput(monthInput, monthOk);
  markInput(yearInput, yearOk);

  if (!dayOk || !monthOk || !yearOk) {
    setPrompt("Error: wrong format. Use DD MM YYYY with valid ranges.");
    showInvalidState();
    return;
  }

  const day = Number(dayStr);
  const month = Number(monthStr);
  const year = Number(yearStr);

  // 3) Real date check
  const birthDate = new Date(year, month - 1, day);
  const isRealDate =
    birthDate.getFullYear() === year &&
    birthDate.getMonth() === month - 1 &&
    birthDate.getDate() === day;

  if (!isRealDate) {
    markInput(dayInput, false);
    markInput(monthInput, false);
    markInput(yearInput, false);
    setPrompt("Error: invalid calendar date.");
    showInvalidState();
    return;
  }

  // 4) Future date check
  const today = new Date();
  if (birthDate > today) {
    markInput(dayInput, false);
    markInput(monthInput, false);
    markInput(yearInput, false);
    setPrompt("Error: birth date cannot be in the future.");
    showInvalidState();
    return;
  }

  let years = today.getFullYear() - year;
  let months = today.getMonth() - (month - 1);
  let days = today.getDate() - day;

  // Normalize negative day/month differences
  if (days < 0) {
    const daysInPrevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0,
    ).getDate();
    days += daysInPrevMonth;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  markInput(dayInput, true);
  markInput(monthInput, true);
  markInput(yearInput, true);
  setPrompt("OK: calculation completed.", false);
  showValidState(years, months, days);
});
