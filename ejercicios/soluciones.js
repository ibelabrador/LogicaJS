function saludoPerro(nombre){
    return "Hola " + nombre
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
    if(Number.isInteger(num)){
        if(num%10===4){
            return "El número termina en 4"
        }else {
            return "El número no termina en 4"
        }
    } else {
        return "No me mandaste un entero"
        }
}

function tresDigitos (num){
    if(num>99 && num<999){
        return "El número es de 3 dígitos"
    }else{
        return "El número no es de 3 dígitos"
    }
}

function sumaDigitos(num){
    if(num>9 && num<99){
        return Math.floor(num/10) + num%10
    } else {
        return "No es un número de 2 dígitos"
    }
}

function digitosPar(num){
    if(num>9 && num<99){
        if(Math.floor(num/10)%2===0 && (num%10)%2===0) {
        return "Ambos dígitos son pares"
        } else {
            return "Uno de los dígitos no es par"
        }
    } else {
        return "No es un dígito de dos números "
    }
}   

function numPrimo(num){
    if(num>9 && num<20){
        if(!num%2===0){
            return "Es primo"
        }else {
        return "No es primo"
        }
    }else {
        return "No es un número de dos dígitos menor que 20"
    }
}
