let bucketLists = [
    {id : 3,text: "여행가기", done: false},
    {id : 2,text: "치킨 먹기", done: true},
    {id : 1,text: "코딩 하기", done: false}
];

function toggle(id){
    bucketLists.map((element)=>{
        if(element.id === id && element.done === true) element.done=false;
        else if(element.id === id && element.done === false) element.done = true;
    })
};

toggle(2);

console.log(bucketLists);