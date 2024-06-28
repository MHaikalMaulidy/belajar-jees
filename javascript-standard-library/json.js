//https://www.w3schools.com/js/js_json.asp
const person={
    name:"John",
    age:30,
    address:{city:"depok", country:'indo'}
    ,hobbies : [
        'tradink', 'ngocok'
    ]
}
//ngubah jadi json
const json=JSON.stringify(person)
document.writeln(json)

//ngubah json jadi object
const jsonObject=JSON.parse(json);
console.info(jsonObject)
