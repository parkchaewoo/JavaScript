const orderList = [
    {
        menu : "치킨",
        price : 17000,
        event : false,
        count : 50
    },
    {
        menu : "돈까스",
        price : 8500,
        event : true,
        count : 99
    },
    {
        menu : "마라탕",
        price : 8000,
        event : false,
        count : 100
    },
    {
        menu : "쫄면",
        price : 6500,
        event : false,
        count : 0
    },
    {
        menu : "짜장면",
        price : 5500,
        event : true,
        count : 30
    }
]

const orderListInCnt = orderList.filter((element)=> element.count != 0);
const orderListIvestPrice = orderListInCnt.map((element) => element.price*0.9);
console.log(orderListIvestPrice);

const result = orderList.reduce((acc,cur)=>{
    if(cur.count != 0) acc.push(cur.price*0.9);
    return acc;
},[])

console.log(result);