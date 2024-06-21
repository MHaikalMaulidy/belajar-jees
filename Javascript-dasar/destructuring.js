/*destructuring array */
{const names=['timoty','ronald','eko','kenedy','leon', 'kennedy']
const [firstName,middleName,lastName, ...other]=names;
document.writeln(`<p>${firstName}</p>`)
document.writeln(`<p>${middleName}</p>`)
document.writeln(`<p>${lastName}</p>`)
document.writeln(`<p>${other}</p>`)}
/*destructuring object */
{const person={
    firstName:'Timoty',
    lastName:'Ronald',
    address:{
        street:'Jl. Raya',
        city:'Jakarta',
        country:'Indonesia'
    }
    ,hobby:'tradink 16jam nonstop'
}
const {firstName,lastName,address,...other}=person
document.writeln(`<p>${firstName}</p>`)
document.writeln(`<p>${lastName}</p>`)
document.writeln(`<p>${address}</p>`)
document.writeln(`<p>${other}</p>`)
}