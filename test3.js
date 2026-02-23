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

hello("Ivan", 18);

console.log(add(2, 3));
console.log(substact(5, 2));
console.log(isEven(4));
console.log(isValidEmail("hello@gmail.com"));
