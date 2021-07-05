// Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar.

var correct = true;
console.log(`Correct variable before function: ${correct}`);

let string = 'text';
console.log(`String variable before function: ${string}`);

const pi = 3.14;

function test() {
  var string = 'Inside function';
  correct = false;
  console.log(`String variable inside function: ${string}`);
}

test();

console.log(`Correct variable after function: ${correct}`);
console.log(`String variable before function: ${string}`);
