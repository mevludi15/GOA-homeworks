class Animal {

    constructor(name, age){
        this.name = name;
        this.age = age
    }

    speak() {
        return `${this.name} made a noise`
    }
}

class dog extends Animal {
    constructor(name, age){
        super(name, age)
    }

    specific(){
        return `${this.name} bark`
    }
}


class User {
    static count = 0;

    constructor(name) {
        this.name = name;
        User.count++
    }

    static getUserCount() {
        return User.count
    }
}