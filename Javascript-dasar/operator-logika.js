/* && = and */
const nilaiUjian= 80;
const nilaiTugas= 70;
const lulusUjian= nilaiUjian>75;
const lulusTugas= nilaiTugas>75;

let lulus= lulusUjian && lulusTugas;
document.writeln("<p>"+ lulus+"</p>")
/* || = or */
lulus= lulusUjian || lulusTugas;
document.writeln("<p>"+ lulus+"</p>")
/* ! = not */
