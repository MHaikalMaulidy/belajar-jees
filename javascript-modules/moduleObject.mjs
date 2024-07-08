export const firstName='timoty'
export const lastName='ronald'

export function hello(){
    console.log('hello from timoty')
}

export class Person{
    constructor(name){
        this.name=name
    }
    sayHello(name){
        console.log(`hello ${name}, my name is ${this.name}`)
    }
}

