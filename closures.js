function outer() {
  const fish = '🐟';
  let count = 0;

  function inner() {
    count++;
    return `${count} ${fish}`
  }

  return inner
}

const fun = outer();

const n = prompt('Enter a counter : ');

for (let i = n; i > 0; i--) {
  console.log(fun());
}
