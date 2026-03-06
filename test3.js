/* function happyBirthday(username, age){
    console.log(`Happy dear to ${username}!`);
    console.log(`You are now ${age} years old!`);
}


happyBirthday("Ivan", 18);*/

function add(x, y) {
  let result = x + y;
  return result;
}

function substact(x, y) {
  return x - y;
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

const hello = (name, age) => {
  console.log(`Hello ${name}!`);
  console.log(`You are old ${age} years old`);
};





setTimeout( () => console.log ("Hello"), 2000);

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(element => Math.pow(element, 2));
const cubes = numbers.map(element => Math.pow(element, 3));
const evenNumbers = numbers.filter(element => element % 2 === 0);
const oddNumbers = numbers.filter(element => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element, 0);

function hello(){

}

hello("Ivan", 18);

console.log(add(2, 3));
console.log(substact(5, 2));
console.log(isEven(4));
console.log(isValidEmail("hello@gmail.com"));
