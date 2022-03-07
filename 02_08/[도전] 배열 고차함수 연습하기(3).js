const bucketList = [
    {id : 3,text: "여행가기", done: false},
    {id : 2,text: "치킨 먹기", done: true},
    {id : 1,text: "코딩 하기", done: false}
]

function sortKey(key){
    return bucketList.sort((a,b) => {
        if(a[key]<b[key]){
            return -1;
        }
        else if(a[key]>b[key]){
            return 1;
        }
        else return 0;
    })
}

// function compare(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     }
//     if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }

sortKey('id');
console.log(bucketList)
sortKey('text');
console.log(bucketList)
sortKey('done');
console.log(bucketList)
