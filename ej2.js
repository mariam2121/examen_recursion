
function FindNumber(arr, e) {
    //caso base 
    if(arr <=1){
        return true
    }

    if (arr.includes(e)) {
        console.log(`El número ${e} se encuentra en el arreglo.`);
    } else {
                console.log(`El número ${e} no se encuentra en el arreglo.`);
            }
        }



console.log(FindNumber([3,5,7,1,8],2));


