function plus(){
    return new Promise((resolve,reject) =>{
        resolve(0);
    })
}

plus().then((sum)=>{
    console.log(sum);
    sum = sum+1;
    console.log(sum)
    return sum+1;
}).then((sum)=>{
    console.log(sum);
    return sum+1;
}).then((sum)=>{
    console.log(sum);
    return sum+1;
}).then((sum)=>{
    console.log(sum);
    return sum+1;
}).then((sum)=>{
    console.log(sum);
    return sum+1;
}).then((sum)=>{
    console.log(sum);
    return sum+1;
}).then((sum)=>{
    console.log(sum);
    return sum+1;
})
