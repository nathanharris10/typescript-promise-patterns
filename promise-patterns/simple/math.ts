function addFive(number: number): Promise<number> {
  console.log(`${number} + 5 = ${number + 5}`);
  return Promise.resolve(number + 5);
}

function subtractThree(number: number): Promise<number> {
  console.log(`${number} - 3 = ${number - 3}`);
  return Promise.resolve(number - 3);
}

function divideFive(number: number): Promise<number> {
  console.log(`${number} / 5 = ${number / 5}`);
  return Promise.resolve(number / 5);
}

function multiplyTwo(number: number): Promise<number> {
  console.log(`${number} * 2 = ${number * 2}`);
  return Promise.resolve(number * 2);
}

console.log("Operations Simple Promise Pattern");
const number = 10;
multiplyTwo(number)
  .then(divideFive)
  .then(subtractThree)
  .then(addFive)
  .then((result) => console.log(`Final result is ${result}`));
