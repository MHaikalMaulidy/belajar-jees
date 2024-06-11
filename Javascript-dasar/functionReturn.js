function sayHello(awal,akhir){
    return `hallo ${awal} ${akhir}`
}
document.writeln(`<p>${sayHello('timothy','ronald')}</p>`)
/*jadi mirip ky variable */
function nilai(value){
    if (value>90){
        return "CERDAS"
    }else if(value>80){
        return 'lumayan'
    }
    else{
        return 'DONGOK'
    }
}
document.writeln(`<p>${nilai(10)}</p>`)