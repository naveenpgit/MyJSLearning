class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getData() {
        console.log(this.name + " is " + this.age + " years old !");
    }

}

var user = new User("foo", 7);
console.log(user.getData());