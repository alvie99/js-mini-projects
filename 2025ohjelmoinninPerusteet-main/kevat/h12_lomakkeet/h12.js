// Tehtävä 1
let name = document.getElementById("textinput");
clickBox1 = document.getElementById("clickBox");

function tervehdi(name) {
  console.log(`Hei, ${name}!`);
  alert(`Hei, ${name}!`);
}

clickBox1.addEventListener("click", function () {
  if (name.value === "" || name.value == null) {
    alert("Kuka olet?");
  } else {
    tervehdi(name.value);
  }
});

// Tehtävä 2
uppercaseInput = document.getElementById("lowercaseInput");
uppercaseInput.addEventListener("blur", function () {
  uppercaseInput.value = uppercaseInput.value.toUpperCase();
});

// Tehtävä 3
salasana = document.getElementById("passwordInput");
salasana.addEventListener("change", function () {
  if (salasana.value.length === 8) {
    document.getElementById("passwordContainer").style.color = "green";
  } else {
    document.getElementById("passwordContainer").style.color = "red";
  }
});

// Tehtävä 4
foodlist = document.getElementsByName("food");
selected = document.getElementById("selectedFoods");

foodlist.forEach(function (food) {
  food.addEventListener("change", function () {
    let selectedFoods = [];
    foodlist.forEach(function (food) {
      if (food.checked) {
        selectedFoods.push(food.value);
      }
    });
    selected.textContent = "Valitut ruoat: " + selectedFoods.join(", ");
  });
});

// Tehtävä 5 + 6
const groundWater = document.getElementById("groundWater");
const vehicleType = document.getElementById("vehicleType");
const finalChoice = document.getElementById("finalchoice");

const vehicles = {
  Autot: ["Henkilöauto", "Kuorma-auto", "Bussi"],
  Veneet: ["Soutuvene", "Purjevene", "Moottoriivene"],
};

function updateDisplay() {
  let display = "";

  if (groundWater.value) {
    display = groundWater.value;
  }

  if (vehicleType.value) {
    if (display) {
      display += " - " + vehicleType.value;
    } else {
      display = vehicleType.value;
    }
  }

  finalChoice.textContent = display;
}

groundWater.addEventListener("change", function () {
  vehicleType.innerHTML = '<option value="">Valitse...</option>';

  if (groundWater.value && vehicles[groundWater.value]) {
    vehicles[groundWater.value].forEach(function (vehicle) {
      const option = document.createElement("option");
      option.value = vehicle;
      option.textContent = vehicle;
      vehicleType.appendChild(option);
    });
  }

  updateDisplay();
});

vehicleType.addEventListener("change", function () {
  updateDisplay();
});
