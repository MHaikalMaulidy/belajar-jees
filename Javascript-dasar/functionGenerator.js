/**generator= data yang bisa di iterasi kaya array */
function* listNama(){
    yield 'eko';
    yield 'budi';
    yield 'timoty';
}
let nama= listNama();
for (const names of nama ){
    document.writeln(names)
}
function* buatGanjil(angka){
    for (let i = 0; i < angka; i++) {
        if(i % 2 === 1){
            yield i;
}}}
let ganjil = buatGanjil(101);
for (let i of ganjil){
    document.writeln(`<p>${i}</p>`)
}