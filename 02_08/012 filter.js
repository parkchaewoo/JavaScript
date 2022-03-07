const array = [1,2,3,4,5];
const array2 = [
    {id : 1, text : "hello"},
    {id : 2, text : "hi"},
    {id : 3, text : "bye"}
]

console.log(array.filter((element, index, array) =>{
    element %2 === 1;
} ))

const odd = array.filter((element, index, array) =>{
    element %2 ===1
})

console.log(odd);