const angka1='1';
const angka2=1;
document.writeln(`<p> ${angka1+angka2}</p>`)
/*'parseint' ngubah string ke int */
document.writeln(`<p> ${parseInt(angka1)+angka2}</p>`)
document.writeln(`<p> ${parseFloat('2.5')}</p>`)
/*number bisa jadi float atau jadi int biasa */
document.writeln(`<p> ${Number(9.3)}</p>`)

const a=1;
const b=2;
/*konversi ke string */
const total=a.toString()+b.toString();
document.writeln(`<p> ${total}</p>`)