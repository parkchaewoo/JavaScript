function hello(value){
    console.log(value);
}

[3,5,4,2].forEach(hello);


[3,5,4,2].forEach(function(value){
    console.log(value);
});

[3,5,4,2].forEach((value) => console.log(value));

//2가지 특징
//1. 반환값은 항상 undefined
//2. 중간에 break할 수 없다.  every, some, find, find fincIndex

[3,4,5,2].forEach((element, index, array)=>{
    console.log(element, index, array);
})