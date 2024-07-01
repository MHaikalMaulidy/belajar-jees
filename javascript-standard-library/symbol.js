//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
const firstName=Symbol('ini deskripsi');
const lastName=Symbol('ini deskripsi');

const person={}
person[firstName]='Timoty'
person[lastName]='ronald'
console.info(person)

const orang={}
orang[Symbol.for('nama')]='timoty ronald'
orang[Symbol.for('umur')]=20
document.writeln(orang[Symbol.for('nama')],' ',orang[Symbol.for('umur')])
