const person={
    firstName:'timoty'
    ,lastName:'ronald',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
document.writeln(person.fullName)