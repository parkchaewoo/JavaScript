const person = {age : 222, weight: 90, height: 183};

console.log(person.age);

// const age = person.age;
// const weight = person.weight;
// const height = person.height;

const { age, weight, height } = person;
console.log(age);