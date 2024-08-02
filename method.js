let person = {
    name: 'Julius Mugambi',
    sayHello: function() {
        console.log('Hello, my name is' + this.name);
    }
}
person.sayHello();
