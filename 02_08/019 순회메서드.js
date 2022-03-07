const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [1,2,3,4,5,6,7,8,9,10];

const evenArr = [];
arr1.filter((element) => {
    if(element%2==0) evenArr.push(element)
})
const result1 = evenArr.map((elemnt)=> elemnt*10)
console.log(result1);

const result2 = arr2.reduce((acc,cur)=>{
    if(cur%2===0){
        acc.push(cur*10);
    }
    return acc;
},[])
console.log(result2);
