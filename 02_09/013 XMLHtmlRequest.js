//단계
// 1.XMLHttpRequest .만든다 -> newHttpRequest
// 2. open 매서드 => 서버로 보낼 Ajax 형식을 설정
//    send 매서드 => 작성된 Ajax 요청을 서버로 전달
// 2. 서버 응답 처리 => httpRequedst.onreadystateChange 사용

function getData(){
    const httpRequedst = new XMLHttpRequest();
    console.log(httpRequedst);
    // 0 -> request 초기화X
    // 1 -> 서버와 연결된 loading 상태
    // 2 -> 서버가 request를 받은 loaded 상태
    // 3 -> request를 처리하는 중인 interactive 상태
    // 4 -> complete request에 대한 처리 끝, 응답 준비 완료
    httpRequedst.onreadystatechange = function(){
        console.log(httpRequedst);
        //httpRequest.DONE 4로 정의되어있음
        if(httpRequedst.readyState === httpRequedst.DONE){
            if(httpRequedst.status === 200 || httpRequedst.status === 201){
                console.log(httpRequedst.response)
            }else{
                console.log(httpRequedst.responseText)
            }
        }
    }

    httpRequedst.open("GET","https://jsonplaceholder.typicode.com/todos/")
    httpRequedst.send();
}

const data =  getData();

console.log(data);

const map = data.map(e) =>