let bucketLists = [
    {id : 3,text: "여행가기", done: false},
    {id : 2,text: "치킨 먹기", done: true},
    {id : 1,text: "코딩 하기", done: false}
];
function addList(key){
    bucketLists.push(key);
    
}

function sortkey(key){
    return bucketLists.sort((a,b) => {
        if(a[key]<b[key]) return 1;
        else return -1;
    })
    
}

addList({id:4,content:'요리하기',completed:true})
sortkey("id");


console.log(bucketLists);