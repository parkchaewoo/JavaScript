const chicken = [
    {name : "머리", quantitiy: 1},
    {name : "날개", quantitiy: 2},
    {name : "닭다리", quantitiy: 2},
    {name : "닭가슴살", quantitiy: 1},
    {name : "닭발", quantitiy: 2}
];

console.log(chicken.find((element)=>element.name === "닭다리"));
console.log(chicken.findIndex((element)=>element.name === "닭다리"));