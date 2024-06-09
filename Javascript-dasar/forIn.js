const jawa=['jawa','suwir','icikiwir']
for(const jawir in jawa){
    document.writeln(`<p>${jawa[jawir]}</p>`)
}
/*jarang dipake buat array biasanya dipake buat objek */
const ob={
    nama:"timothy",
    pekerjaan:"tradink",
    suku:"cina"
}
for(const profil in ob){
    document.writeln(`<p>${profil}: ${ob[profil]}</p>`)
}