const arr = [1,2,3,4,5];
const sum = arr.reduce((acc,cur) => acc+cur);
console.log(sum);

function callback(acc,cur,index, array){
    console.log(acc, cur, index, array);
    return acc+cur;
}

arr.reduce(callback,0);

const minus = arr.reduce((acc,cur) => acc-cur,0);

console.log(minus);