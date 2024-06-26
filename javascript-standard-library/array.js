// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//array loop
const array=['eko','timoty','ronald']
array.forEach(function(value,index){
    document.writeln(`<p>${index}: ${value}`)
})
//pake arrow funct
array.forEach((value,index)=>
    document.writeln(`<p>${index}: ${value}</p>`))

//array queue
const queue=[];
queue.push('skibidi')
queue.push('toilet')
queue.push('sigma')
//shift= nge cut data dari depan
document.writeln(queue.shift())    
document.writeln(queue.shift())
document.writeln(queue.shift())
document.writeln(queue.shift())

//array stack ngecut dari belakang kebalikan shift
const stack=[];
stack.push('toilet')
stack.push('sigma')
stack.push('rizz')

document.writeln(`<p>${stack.pop()}`)
document.writeln(stack.pop())
document.writeln(stack.pop())
document.writeln(stack.pop())

//search
const ar=['eko','timoty','ronald',1,3,4,5,'timoty'];

document.writeln(`<p>${ar.find(value => value === 'timoty')}`)
document.writeln(`<p>${ar.findIndex(value => value>3)}`)
document.writeln(`<p>${ar.includes(7)}`)
document.writeln(`<p>${ar.indexOf('timoty')}`)
document.writeln(`<p>${ar.lastIndexOf('timoty')}`)

//array filter

document.writeln(`<p>${ar.filter(value=>typeof(value)=='number')}</p>`)
const angka=[1,2,3,4,5,6,7,8,9,10]
document.writeln(`<p>ganjil:${angka.filter(value=>value%2==1)}</p>`)
document.writeln(`<p>genap:${angka.filter(value=>value%2==0)}</p>`)

