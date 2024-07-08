const nama='lethal company'

function sum(first,second){
    return first+second
}

class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.info(`hallo ${name}, my name is ${this.name}`);
    }
}

export{nama,sum,Person}