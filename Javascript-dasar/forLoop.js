/*yang di tengah kondisi */
/*yang paling kiri "let counter=0" bakal dieksekusi di awal */
for(let counter=0;counter<=10;counter++/*yang paling kanan bakal di eksekusi di akhir */){
    document.writeln(`<p>counter ke-${counter}</p>`)
    counter++;
}
