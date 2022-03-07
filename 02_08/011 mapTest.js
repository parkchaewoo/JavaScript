const arr = [1,2,3,4,5];

const Array = arr.map((element) => element*element);

const arr2 = ["a","bcd","ef","g"];
const result = arr2.map((e) => {
    console.log(e.length);
    e.length;
})

console.log(Array);
console.log(result);