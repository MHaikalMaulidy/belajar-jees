const date1=new Date()
document.writeln(date1)
const date2=new Date(2020,1,1)
document.writeln('<p>',date2)
const date3=new Date(2020,9,1,16,15,10,123)
document.writeln('<p>',date3)
const date4=new Date(1719632522909)
document.writeln('<p>',date4)

//epoch & unix timestamp
//ngasih kode kaya di var date4
document.writeln('<p>',date1.getTime(),'</p>')

//parsing= membuat date dari string
//YYYY-MM-DD(T=pemisah)JAM:MENIT:DETIK:MILIDETIK
const tanggal='2024-06-04T09:45:45.124+07:00'//+07:00 artinya wib
document.writeln(Date.parse(tanggal))
document.writeln('<p>',new Date(Date.parse(tanggal)))

//getter & setter instance method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const tang=new Date()
document.writeln('<p>',tang.setFullYear(2025))
document.writeln('<p>',tang.setMonth(4))
document.writeln('<p>',tang.setDate(19))
document.writeln('<p>',tang.setHours(12))
document.writeln('<p>',tang.setMinutes(30))
document.writeln('<p>',tang.setSeconds(45))
document.writeln('<p>',tang.setMilliseconds(123))