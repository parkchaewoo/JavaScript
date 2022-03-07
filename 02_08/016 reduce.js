const arr = ["홍길동","임꺽정","홍길동","피카츄","피카츄","홍길동"];

const result= arr.reduce((acc,cur) =>{
    console.log(acc,cur);
    if(acc[cur]){
        acc[cur]++;
    }
    else{
        acc[cur] = 1;
    }
    return acc  ;
},[])