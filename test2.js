const input = prompt('enter number');
const number = Number(input);


if (!isNaN(number) && number >= 0 && number <= 10) {
for (let i = 0; i <= 10; i++) {
    console.log(`${number} * ${i} =
        ${i*number}`);

    }
}