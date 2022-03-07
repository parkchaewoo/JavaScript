const ppluse = [];
const mminuse = new Array();

[-5,3,4,2,-7,-2,-7].forEach((element, index, array) =>{
    if(element>0) ppluse.push(element);
    if(element<0) mminuse.push(element);
})

console.log(ppluse);
console.log(mminuse);