"use strict";

const nimi = prompt("Anna nimesi:");
const greetingDiv = document.getElementById("greeting");
greetingDiv.innerHTML = `Hei, ${nimi}`;

const syntymavuosi = prompt("Anna syntymävuotesi: ");
const tanaanVuosi = new Date().getFullYear();
const ika = tanaanVuosi - parseInt(syntymavuosi);
const ageDiv = document.getElementById("ageCalculator");
ageDiv.innerHTML = `Olet syntynyt vuonna ${syntymavuosi} ja olet siis tänä vuonna ${ika} vuotta vanha.`;

console.log(`Nimi: ${nimi}`);
console.log(`Syntymävuosi: ${syntymavuosi}`);
console.log(`Ikä: ${ika}`);
