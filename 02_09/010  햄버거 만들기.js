function hambuger(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("");
        },3000)
    })
}

hambuger().then(()=>{
    return "참깨빵위에"
}).then((data)=>{
    console.log(data)
    return data+"순쇠고기 패티 2장";
}).then((data)=>{
    console.log(data)
    return data+"양상추";
}).then((data)=>{
    console.log(data)
    return data+"치즈피클양파까지";
}).then((data)=>{
    console.log(data)
})