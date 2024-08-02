let person = {
    name: 'Jane',
    age: 25
};
console.log(person.name);
console.log(person.age);
console.log(person);

person.job ='Developer'; //adding 
console.log(person);

person.age = 28; //modify
console.log(person);

delete person.job;
console.log(person);
