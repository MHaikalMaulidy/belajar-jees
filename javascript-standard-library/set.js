//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const set=new Set()
set.add('timoty')
set.add('ronald')
set.add('timoty')
set.add('keneddy')

console.info(set)
set.forEach((value)=> document.writeln(value))