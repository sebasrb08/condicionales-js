console.log('taller 2')
console.log('ejercicio 1\n')
let num1,num2
num1=+(prompt("digite un numero"))
num2=+prompt("Digite un segundo numero")
if (num1>num2){
    console.log(`${num1}\n${num2}`)
}else if (num2 > num1){
    console.log(`${num2}\n${num1}`)
}

console.log('ejercicio 2\n')
let num
num=+prompt("digite un numero del 1 al 10 ")
switch (num){
    case 2:
        console.log("es par")
        break
    case 1:
        console.log("es impar")
        break
    case 3:
        console.log("es impar")
        break
    case 4:
        console.log("es par")
        break
    case 5:
        console.log("es impar")
        break
    case 6:
        console.log("es par")
        break
    case 7:
        console.log("es impar")
        break
    case 8:
        console.log("es par")
        break
    case 9:
        console.log("es impar")
    case 10:
        console.log("es par")        
}

console.log("ejercicio 3\n")
let num5
num=+prompt("digite un numero del 1 al 10 ")
switch (num5){
    case 2:
        console.log("dos")
        break
    case 1:
        console.log("uno")
        break
    case 3:
        console.log("tres")
        break
    case 4:
        console.log("cuatro")
        break
    case 5:
        console.log("cinco")
        break
    case 6:
        console.log("seis")
        break
    case 7:
        console.log("siete")
        break
    case 8:
        console.log("ocho")
        break
    case 9:
        console.log("nueve")
    case 10:
        console.log("diez")  
    default:
        console.log('error,el numero no esta en el rango')
      
}
console.log("digite el ejercicio 4")
let min,coste,adi
min =+prompt("digite cuantos minutos duro")
if (min <= 3){
    coste =200
    console.log(`la cantidad a pagar es de ${coste}`)
}else if (min>3){
    coste = 200
    adi = 100
    console.log(`la cantidad total a pagar es de ${((min-3)*adi)+coste}`)
}

console.log("ejercicio 5")
let cBlanco,cNegros,pConejo,vBlancos,Vnegros
cBlanco=+(prompt("digite la cantidad de conejos blancos"))
cNegros=+(prompt("digite la cantidad de conejos negros"))
pConejo=+(prompt("digite el precio de los conejos  "))
vBlancos=+(prompt(`digite cuantos conejos blancos se vendieron de los ${cBlanco} que hay`))
Vnegros=+(prompt(`digite cuantos conejos negros se vendieron de los ${cNegros} que hay`))


