// let mySymbol = Symbol("What about today?");
// console.log(mySymbol);
// let mySymbol = Symbol("My unique properties.");
// let obj = {};
// obj[mySymbol] = "Some value";

// console.log(obj[mySymbol]);
// console.log(object.keys(obj));

const person = {
    name: "Blessed Juma",
    age: 21,
    [Symbol("ssn")]: "123-456-7890"
};

const ssnSymbol = Symbol("ssn");
console.log(person[ssnSymbol]);

console.log(object.keys(person));