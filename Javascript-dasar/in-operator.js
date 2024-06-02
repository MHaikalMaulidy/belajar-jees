const suku={
    jawa:"jawir",
    sunda:"suir"
};
if('jawa' in suku && typeof suku.jawa=='string'){
    alert(`hallo ${suku.jawa}`)
}else{
    alert(`hallo ${suku.sunda}`)
}
/*nge return tru/false */