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

function esPrimo(num) {
    if(num > 9 && num <= 20) {
        var noPrimo = "El numero no es primo"
        if (num > 2 && num % 2 == 0) {
            return noPrimo
        }
        if (num > 3 && num % 3 === 0) {
            return noPrimo
        }
        if (num > 5 && num % 5 === 0) {
            return noPrimo
        }
        if (num > 7 && num % 7 === 0) {
            return noPrimo
        }
        if (num > 11 && num % 11 === 0) {
            return noPrimo
        }
        if (num > 13 && num % 13 === 0) {
            return noPrimo
        }
        if (num > 17 && num % 17 === 0) {
            return noPrimo
        }
        if (num > 19 && num % 19 === 0) {
            return noPrimo
        }
        return "El numero es primo"
    } else {
        return "No es un numero valido";
    }
}

const esPrimo = (num) => {
    if(num > 9 && num <= 20) {
        for(let i=2; i<num; i++) {
            if(num % i === 0) {
                return "El numero no es primo"
            }
        }
        return "El numero es primo"
    }
    return "No es un numero valido";
}

const esPrimo2 = (num) => {
    if(!(num > 9 && num <= 20)) {
        return "No es un numero valido";
    }
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            return "El numero no es primo"
        }
    }
    return "El numero es primo"
}

const numPositivo = (num) => {
    var listaNumeros = []
    for(let i=1; i<=num; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

const numPares = (num) => {
    var listaPares = []
    for(let i=2; i<=num; i+=2){
        listaPares.push(i)
    }
    return listaPares
}

const divisoresExactos = (num) => {
    var divisores = []
    for(let i=1; i<=num; i++) {
        if(num % i === 0) {
            divisores.push(i)
        }
    }
    return divisores
}

const dosNum = (num1, num2) => {
    var listaEnteros = []
    if(num1>num2){
        for(let i=num1; i<=num2; i++){
            listaEnteros.push(i)
        }
    }    
    return listaEnteros
}