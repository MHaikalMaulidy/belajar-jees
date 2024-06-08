let counter=1;
while(true){
    document.writeln(`<p>perulangan ke-${counter}</p>`)
    counter++
    if(counter>=10){
        break;
    }
}
for(let ganjil=0;ganjil<=20;ganjil++){
    if(ganjil%2===0){
            continue;
    }
    document.writeln(`<p>angka ganjil=${ganjil}</p>`)
    }
