const a = function(){
    console.log(a);
}

const b = () => {
    console.log("hello arrow");
}
//() => 는 function() 과 의미가 동일하다

b();

const c = () => console.log("hellow arrow2");
c();

const d = (number) => {
    console.log(number);
};

d(1);

const e = ssafy => console.log("ssafy")
e();