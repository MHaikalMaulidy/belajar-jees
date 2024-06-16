function faktorial(value){
    if (value===1){
        return 1
    }else{
        return value * faktorial(value-1)
    }
}
document.writeln(`${faktorial(5)}`)