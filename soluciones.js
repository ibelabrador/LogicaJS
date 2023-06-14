function saludoPerro(nombre){
    return "Hola" + nombre
}

function odioAdalberto (nombre){
    if (nombre=="Adalberto"){
        return "Que gononea de nombre ome " + nombre
    } else {
        return "Hola amiguis " + nombre
    }
}

function parImpar (num){
    if (num%2===0){
        return "El número es par"
    } else {
        return "El número es impar"
    }
}

function adulto (edad){
    if (edad>=18){
        return "Es un adulto"
    } else {
        return "Es un niño"
    }
}

function terminaCuatro (num){
    let i=0;
    for (let i=0; i<0; i++){
        if(num%10===4){
            return "El número termina en 4"
        }else {
            return "El número no termibna en 4"
        }
    }
}

function tresDigitos (num){
    if(num>99 && num<999){
        return "El número es de 3 dígitos"
    }else{
        return "El número no es de 3 dígitos"
    }
}


