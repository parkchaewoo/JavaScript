const url = "https://jsonplaceholder.typicode.com/todos/"

async function getData(){
    const{data} = await axios.get(url);

    const array = data.reduce((acc,cur) =>{
        if(cur.completed === false&&cur.userId%2===0){
            if(cur.title.length >= 10 && cur.title.indexOf("qua")>0)
            acc.push(cur);
        }
        return acc;
    },[])
    console.log(array)
}

getData();