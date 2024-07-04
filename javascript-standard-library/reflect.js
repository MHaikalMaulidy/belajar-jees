// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

//memodifikasi objek tanpa menyentuh
const person={};
Reflect.set(person,'firstName','Timoty ');
Reflect.set(person,'lastName','Ronald');
document.writeln(person.firstName, person.lastName)

document.writeln(Reflect.get(person,'firstName'),Reflect.get(person,'lastName'));
document.writeln(Reflect.has(person,'firstName'))