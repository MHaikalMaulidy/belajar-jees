export class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.info(`hallo ${name}, my name is ${this.name}`);
    }
}