function createFullName(firstName,middleName,lastName){
    debugger
    return `${firstName} ${lastName} ${lastName}`
}
console.info(createFullName('eko','kennedy','kurniawan'))

function sum(...numbers){
    debugger;
    let total=0;
    for(const number of numbers){
        total=number
    }
    return total;
}
console.info(sum(1,1,1,1,1));