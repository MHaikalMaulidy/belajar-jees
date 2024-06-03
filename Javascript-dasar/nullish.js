/*nullish=== undifined && null */
let jawa;
let ras=jawa;
if (ras===undefined || ras===null){
    ras='jawa'; 
}
document.writeln(`<p>${ras} ${jawa}</p>`)
/*ada shortcut kaya ternary */
let sunda;
let suir=sunda?? "Jawa adalah kunci";

document.writeln(`${suir}`)