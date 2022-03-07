const array = [1,2,3,4,5];
console.log(array.find((element) => element>2));

const inventory = [
    { name : "A", quantity : 1},
    { name : "B", quantity : 2},
    { name : "C", quantity : 3}
];

console.log(inventory.find(element => element.name === "C"));

// 찾는 요소의 '값'을 찾을 때 사용하는 메서드

console.log(array.findIndex((element) => element>4));

// 찾는 요소의 '인덱스'를 찾을 때 사용하는 메서드

