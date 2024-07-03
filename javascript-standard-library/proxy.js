// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

//
//ngebuat handler
const target={}
const handler={
    get: function(target, property){
        console.info(`properti di akses: ${property}`)
        return target[property]
    },
    set:function(target,property,value){
        console.info(`properti di ganti: ${property} menjadi ${value}`)
        if(value==null){
            target[property]=' '}
        else{target[property]=value}
    }
}
const proxy=new Proxy(target,handler)
proxy.firstName='eko '
proxy.middleName='timoty '
proxy.lastName=null
document.writeln(target.firstName,target.middleName,target.lastName)