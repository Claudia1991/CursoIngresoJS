function mostrar()
{
    /**
     * al presionar el botón repetir hasta que utilizamos 'BREAK'.
     */
    for(var i = 0; i<Infinity; i++){
        if(i < 99){
            console.log(i);
        }else{
            console.log("break")
            break;
        }
    }
}