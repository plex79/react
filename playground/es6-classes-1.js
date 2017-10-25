class Person {
    constructor(name = 'Anonim', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hello from ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old. `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description = description + ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    hasHome() {
        return !!this.home;
    }
    getGretting() {
        let greeting = super.getGretting();

        if(this.hasHome()){     // if(this.home)
            greeting = greeting + ` I'm visiting from ${this.home}`;
        }

        return greeting;
    }
}

const ja = new Person('Maciek KKKK', 38);
console.log(ja);
console.log(ja.getGretting());
console.log(ja.getDescription());

const you = new Person();
console.log(you);
console.log(you.getGretting());
console.log(you.getDescription());

console.log('------------------------');

const tom = new Student('Tom KKKK', 38, 'IT');
console.log(tom);
console.log(tom.getDescription());

const tom2 = new Student();
console.log(tom2);
console.log(tom2.getDescription());

console.log('------------------------');

const tom3 = new Traveler('Mike Smith', 55, 'Poland');
console.log(tom3);
console.log(tom3.getGretting());

const tom4 = new Traveler();
console.log(tom4);
console.log(tom4.getGretting());