// Example of variable scope in JS

let x = 10;

function printx() {
    console.log(x)
}

printx();  // prints 10

// analogy from python:
// x = 10
// def printx():
//    print(x)

// printx()  # prints 10

// example of local variable scope in JS

function printy(y) {
    let z = 5;
    console.log(y + z);
}

printy(2); // prints 7

// analogy from python:
// def printy(y):
//   z = 5
//   print(y + z)

// printy(2)  # prints 7

// example of local variable scope error in JS

