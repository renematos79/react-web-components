interface Person {
    firstName: string;
    lastName: string;
}

class Student implements Person {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "Correia", "Matos");
var result = greeter(user);

console.log(result);
