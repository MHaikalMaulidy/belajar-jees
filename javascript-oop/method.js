class person{
    constructor(name){
        this.name=name
    }
    jawa(name){
        document.writeln(`hello ${name} my name is ${this.name}`)
    }
}
const eko=new person('ekoh');
console.info(eko)
eko.jawa('timothy')