let numbers = [];

function addnum() {
  let num = Number(prompt("Anna luku: "));
  numbers.push(num);
  console.log(numbers);
  document.getElementById("numlist").textContent = numbers.join(", ");
}

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  document.getElementById("sum").textContent = sum;
}

i = 0;

function calculateAverage() {
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    avg += numbers[i];
  }
  document.getElementById("average").textContent = (
    avg / numbers.length
  ).toFixed(2);
}

