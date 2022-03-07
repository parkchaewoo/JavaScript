// function hambuger(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("");
//         },1000)
//     })
// }

// async function wait(){
//     try{
//     console.log("참깨빵위에")
//     console.log(await hambuger());
    
//     console.log("순쇄고기 패티 2장")
//     console.log(await hambuger());

    
//     console.log("특별한 소스")
//     console.log(await hambuger());

//     console.log("양상추")
//     console.log(await hambuger());
    
//     console.log("치즈 피클 양파까지")
//     console.log(await hambuger());
//     } catch{
//         console.log("안돼")
//     }
// }

// wait();

const hambuger = ((time,ingredient)=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve(ingredient);
    },time))
});

(async function myTime(){
    try{
        console.log(await hambuger(1000,"참깨빵위에"))
        console.log(await hambuger(2000,"순쇠고기 패티2장"))
        console.log(await hambuger(3000,"특별한 소스"))
        console.log(await hambuger(4000,"양상추"))
        console.log(await hambuger(5000,"치즈피클 양파까지"))
    } catch(error){
        console.log(error);
    }
})();

async function talk(str,time){
    await hambuger(str,time);
}

talk("참깨빵위에",1000)
talk("참깨빵위에",1000)
talk("참깨빵위에",1000)
talk("참깨빵위에",1000)
talk("참깨빵위에",1000)
