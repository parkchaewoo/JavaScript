console.log("어서오세요")
console.log("주목하세요")
console.log("고민하시는 동안, 다른 것 하고 있겠습니다.")

const pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("나 이제 주문할게요~")
        //성공 로직과 실패로직을 분리
        resolve("치킨")
    },10000)
})

//then: 성공했을 때 resolve가 매개변수로 들어옴
pro.then((data)=>{
    console.log(data)
}).catch(()=>{
    console.log("OH NO")
})

console.log("서빙서빙서빙")