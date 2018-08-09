const sum = (a, b) => a + b;
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4};

console.log(a, b, rest);
console.log(sum(1,2));