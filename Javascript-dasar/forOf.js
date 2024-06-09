const jawa=['jawa','suwir','icikiwir']
/*beda sama for in yang cuma ngasih output indexnya, for of langsung isinya */
for(const jawir of jawa){
    document.writeln(`<p>${jawir}</p>`)
}
/*for of gabisa dipake buat objek*/
let ob={
    nama:"timothy",
    pekerjaan:"tradink",
    suku:"cina"
}
const name="timothy"
for(const character of name){
    document.writeln(`<p>${character}</p>`)
}