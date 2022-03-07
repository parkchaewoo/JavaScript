function eat(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("");
        },2000)
    })
}



//promise
//console.log("기다려")
// eat().then((data)=>{
//     console.log(data);
// }).then(()=>{
//     console.log("잘했어")
// })

// async/ await
// async : 

async function wait(){
    try{
    console.log("기다려")
    const data = await eat();
    console.log(data)
    console.log("잘했어")
    } catch{
        console.log("안돼")
    }
}

//1. 함수 선언문
//2. 함수 표현식
//3. arrow
//const test - async()=>{};

wait();