/*jadi parameter '...data' disimpen dalam bentuk array */
function rata2(sigma,...data){
    let total=0;
    /*ini for loop dari array */
    for (const item of data){
        total+=item;
    }
    hasil=total/data.length
    document.writeln(`<p>rata2 dari ${sigma} = ${hasil.toFixed(2)}`)
}
rata2('rizz',1,2,3,4,5,6,100)
const ohio=[1,3,4,5,6]
rata2('ohio',...ohio)
/*kalo langsung ditaro bakalan error, jadi kalo datanya berbentuk 
array wajib diaksih '...' diawal */