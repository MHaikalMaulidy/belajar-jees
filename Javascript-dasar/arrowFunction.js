const sayHello=(iniParameter)=>{
    /*ini body functionnya */
    let say=`hello ${iniParameter}`
    document.writeln(say)
}
sayHello('timoty');

/*bentuk lainnya */
const hallo=(amerikaYa)=>document.writeln(`<p>hallo ${amerikaYa}`)
hallo('tronald')

/*ini return value */
const allo=(rizz)=>`<p>hallo ${rizz}</p>`
document.writeln(allo('ronald'))

/*bisa dimasukin ke param fungsi biasa*/
function callback(masukFunct){
    masukFunct('jawa')
}
callback(hallo)