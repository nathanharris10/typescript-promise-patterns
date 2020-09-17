// Very simplistic example of Promises

function A(): Promise<void> {
  console.log("Function A executed!");
  return Promise.resolve();
}

function B(): Promise<void> {
  console.log("Function B executed!");
  return Promise.resolve();
}

function C(): Promise<void> {
  return Promise.reject("Function C errored!");
}

console.log("Simple Promise Pattern");
A()
  .then(B)
  .then(C)
  .catch((error) => {
    console.log(`${error}`);
  });
