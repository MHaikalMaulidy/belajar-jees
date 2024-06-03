const a={};
let country;
if (a.address !== undefined && a.address !== null){
    country=a.address.country
}
document.writeln(`<p>${country}</p>`)
/*shortcut 
?= ngecek apakah variabel dibelakangnya nullish/tidak jika tidak dilanjut ke variabel berikutnya*/
document.writeln(a?.address?.country)
