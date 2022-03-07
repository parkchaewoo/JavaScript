function plus(number,callback){
    console.log(`number: ${number}`);
    setTimeout(()=>{
        const result = number + 1;
        if(callback){
            callback(result);
        }
    })
}

console.log("start");

plus(0,(result) =>{
    console.log(result)
    plus(result,(result2=>{
        console.log(result2);
    }))
})