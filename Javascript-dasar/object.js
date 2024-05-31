/*kaya dictonary python */
const person={};
person['nama']='timothy ronald'
person['alamat']='indonesia'
person['aset crypto(btc)']=30
console.table(person);
delete person['alamat']
console.table(person)

const timothy={
    mclaren:"warna oren",
    aset:"100 btc",
    pekerjaan:"jual kelas"
}
console.table(timothy)

console.info(`nama: ${person.nama}`)
console.info(`aset: ${timothy.aset}`)
console.info(`pekerjaan: ${timothy.pekerjaan}`)