function sleep(delay){
    let start = new Date().getTime();
    console.log(start);
    let limit =  start + delay;
    while(true){
        let now = new Date().getTime();
        if(now>=limit)break;
    }
}

sleep(3000);
alert('#');