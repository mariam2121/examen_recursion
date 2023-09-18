function islsogram (cadena){
    // caso base 
    if(cadena.length <= 1){
        return true;
    }
    if (cadena[0]== cadena[cadena.length-1]) {
        return islsogram(cadena.slice(0 , cadena[cadena.length-1]))
    } else {
        return false;
}
}
console.log(islsogram("islsogram"))