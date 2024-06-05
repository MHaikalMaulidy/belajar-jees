/*dipilih nilai truty pertama */
console.info('gello'||'')
console.info(''||[])
console.info('0'||'noll')
console.info(0||'nol')
console.info(null||'nul')
console.info(undefined||'UNDIfined')
/*dipilih nilai falsy terakhir */
console.info(0||false)
/*cara penggunaan */
const person={firstName:"timothy",
lastName:"ronaldi"
}
const name=person.firstName||person.lastName
console.info(name)