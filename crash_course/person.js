class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greeting(){
        console.log(`This is ${this.name} and my age is ${this.age}`)
    }
}

module.exports = Person