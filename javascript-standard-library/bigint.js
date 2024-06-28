//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

const a=BigInt(Number.MAX_SAFE_INTEGER)
const b=BigInt(Number.MAX_SAFE_INTEGER)
const c=a+b
document.writeln(typeof c,' ', c)