function foo1() {
    var fruit1 = "apple";
    let fruit2 = "mango";
    const fruit3 = "orange"
   
   function foo2() {
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}
foo1();

