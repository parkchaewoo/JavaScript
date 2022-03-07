const increment = (input) => input+1;
const decrement = (input) =>input-1;
const squared = (input) => input*input;
const half = (input) => input/2;

const initValue = 1;
const pipeLine = [increment,decrement, increment, increment, squared, half,increment];
const result = pipeLine.reduce((acc,cur) => cur(acc),initValue);
console.log(result);