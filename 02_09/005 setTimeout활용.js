console.log("hi");

setTimeout(()=>{
    console.log("first");
    setTimeout(()=>{
        console.log("second")
        setTimeout(()=>{
            console.log("third")
        },2000)
    },1000)
},500)