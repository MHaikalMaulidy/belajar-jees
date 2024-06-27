//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
const person={
    nama:'timoty',
    pekerjaan:'tradink',
    umur:20,
}
//jadi gabisa diganti lagi
Object.freeze(person);
person.nama='eko';
delete person.pekerjaan;
document.writeln(person.nama, person.pekerjaan)

//seal= bisa diubah tapi gabisa dihapus
const person2={nama:'jawa',
    pekerjaan:'tradink',
    umur:23,
}
Object.seal(person2);
person2.nama='adhis';
delete person2.pekerjaan;
document.writeln(`<p> ${person2.nama}, ${person2.pekerjaan}</p>`)

//object assign
const sumber={fistname:'eko'}
const target={lastname:'kennedy'}
Object.assign(target,sumber)
document.writeln(`<p>${target.fistname}, ${target.lastname}</p>`)
//kalo attributnya udah ada, bakal ditimpa

//object values= ngambil semua property dalam bentuk array
document.writeln(Object.values(person))
document.writeln('<p>',Object.getOwnPropertyNames(person))