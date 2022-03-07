let cnt = 0;

[4,3,5,1,6,5].forEach((element, index, array )=>{
    if(element%2 != 0) cnt++;
})

console.log(cnt);