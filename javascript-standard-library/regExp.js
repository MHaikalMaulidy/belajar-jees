// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
//regexp buat mencari text
//ada 3 cara
const regex1=/eko/;
const regex2=new RegExp('eko')
const regex3=new RegExp(/eko/)
const name='timoty eko ronald'

let result=regex1.exec(name)
//ngereturn str kalo datanya ada
document.writeln(result)
//ngereturn null kalo datanya ga ada

//nge return boolean kalo ada true kalo ga ada false
result=regex2.test(name)
document.writeln(result)

//ngubah regexp jadi incase sensitive 'i'
const hurufBesar=/RONALD/i
result= hurufBesar.exec(name)
document.writeln('<p>',result)

//ngubah regexp jadi global 'g'
const namaGlobal=/tIMOTY/ig
while((result=namaGlobal.exec(name))!== null){
    document.writeln('<p>',result,'</p>')
}