const arr = [1,2,3,4,5,6,7,8,9,10];
const result1 = arr.reduce((acc,cur) =>{
    if(cur%2 === 0){
        acc.push("짝")
    }
    else{
        acc.push("홀")
    }
    return acc;
},[])

console.log(result1);

const data = ["BBQ","BHC","BBQ","처갓집",["굽네치킨","푸라닭","BBQ"],"굽네치킨"];
const flatData = data.flat();

const result2 = [];
flatData.reduce((acc,cur)=>{
    if(acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
},result2)

console.log(result2)