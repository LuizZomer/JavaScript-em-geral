const num1 = [1,2,3,4];
const num2 = [5,6,7,8];

// const a3 = num1.concat(num2,[9,10])
const a3 = [...num1, ...num2,9,10]

console.log(a3) 