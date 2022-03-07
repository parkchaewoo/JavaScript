const animal = {
    name : "cat"
}

console.log(animal);

const cuteAnimal ={
    attribute: "cute",
    ...animal
};

console.log(cuteAnimal);

const animals = ["고양이","호랑이","참새"];
const animals2 = [...animals,"사자"];

console.log(animals2);

const cuteDog = {
    name : "dog",
    attribute : "cute",
    type : "푸들"
}

const {name,...another} = cuteDog;
console.log(another)

const numberArray = [1,2,3,4,5,6,7];
const[one] = numberArray;
console.log(one);

//배열 디스트럭처링과 객체 디스트럭처링의 차이는
//배열은 순서가 중요, 객체는 순서가 중요하지 않음
//배열은 변수명이 중요하지 않음, 객체는 변수명이 중요함