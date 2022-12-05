// console.log('taller 2')
// console.log('ejercicio 1\n')
// let num1,num2
// num1=+(prompt("digite un numero"))
// num2=+prompt("Digite un segundo numero")
// if (num1>num2){
//     console.log(`${num1}\n${num2}`)
// }else if (num2 > num1){
//     console.log(`${num2}\n${num1}`)
// }

// console.log('ejercicio 2\n')
// let num
// num=+prompt("digite un numero del 1 al 10 ")
// switch (num){
//     case 2:
//         console.log("es par")
//         break
//     case 1:
//         console.log("es impar")
//         break
//     case 3:
//         console.log("es impar")
//         break
//     case 4:
//         console.log("es par")
//         break
//     case 5:
//         console.log("es impar")
//         break
//     case 6:
//         console.log("es par")
//         break
//     case 7:
//         console.log("es impar")
//         break
//     case 8:
//         console.log("es par")
//         break
//     case 9:
//         console.log("es impar")
//     case 10:
//         console.log("es par")        
// }

// console.log("ejercicio 3\n")
// let num5
// num=+prompt("digite un numero del 1 al 10 ")
// switch (num5){
//     case 2:
//         console.log("dos")
//         break
//     case 1:
//         console.log("uno")
//         break
//     case 3:
//         console.log("tres")
//         break
//     case 4:
//         console.log("cuatro")
//         break
//     case 5:
//         console.log("cinco")
//         break
//     case 6:
//         console.log("seis")
//         break
//     case 7:
//         console.log("siete")
//         break
//     case 8:
//         console.log("ocho")
//         break
//     case 9:
//         console.log("nueve")
//     case 10:
//         console.log("diez")  
//     default:
//         console.log('error,el numero no esta en el rango')
      
// }
// console.log("digite el ejercicio 4")
// let min,coste,adi
// min =+prompt("digite cuantos minutos duro")
// if (min <= 3){
//     coste =200
//     console.log(`la cantidad a pagar es de ${coste}`)
// }else if (min>3){
//     coste = 200
//     adi = 100
//     console.log(`la cantidad total a pagar es de ${((min-3)*adi)+coste}`)
// }

// console.log("ejercicio 5")
// let cBlanco,cNegros,pConejo,vBlancos,vNegros,totalC,montoT,mayor
// cBlanco=+(prompt("digite la cantidad de conejos blancos"))
// cNegros=+(prompt("digite la cantidad de conejos negros"))
// pConejo=+(prompt("digite el precio de los conejos  "))
// vBlancos=+(prompt(`digite cuantos conejos blancos se vendieron de los ${cBlanco} que hay`))
// vNegros=+(prompt(`digite cuantos conejos negros se vendieron de los ${cNegros} que hay`))
// totalC= vBlancos+vNegros
// montoT= totalC*pConejo
// if (vBlancos >vNegros){
//     mayor = 'se vendieron mas los conejos blancos'
// }else if (vBlancos < vNegros){
//     mayor = 'se vendieron mas los conejos negros'
// }else{
//     mayor= 'se vendieron la misma cantidad de conejos blancos y negros'
// }
// console.log(`en total hay ${totalC} conejos vendidos\nel monto total de los conejos es ${montoT}\ny ${mayor}`)

// console.log('ejercicio 6\n')

// let eva1,eva2,eva3,trabajos1,trabajos2,nPrevios,nTrabajo,nFinal
// eva1=+prompt("Digite la nota de la primera evaluacion ")
// eva2=+prompt("Digite la nota de la segunda evaluacion ")
// eva3=+prompt("Digite la nota de la tercera evaluacion ")
// trabajos1=+prompt("Digite la nota de el primer trabajo ")
// trabajos2=+prompt("Digite la nota de el sgeudno trabajo ")
// nPrevios = (eva1+eva2+eva3)*0.60/3
// nTrabajo = (trabajos1+trabajos2)*0.40/2
// nFinal = nPrevios+nTrabajo
// if (nFinal >=1.0 && nFinal <= 5.0){
//     console.log(`la nota definitiva es de ${nFinal}`)
// }else{
//     console.log('error en las notas')
// }

// console.log('ejercicio 7\n ')
// let arti,clave,precioO,cant,desc
// arti=prompt('digite el nombre del articulo ')
// clave=+prompt("1.clave 1\n2.clave2\ndigite su opcion ")
// precioO=+(prompt("digite el precio original  "))
// cant=+(prompt("digite la cantidad de los articulos"))
// if (clave == 1){
//     desc = 10
// }else if (clave == 2){
//     desc = 20
// }
// console.log(`nombre Articulo:${arti}
// clave:clave${clave}
// precio original ${precioO}
// cantidad:hay ${cant}
// precio con descuento es:${precioO * cant-(precioO*cant*desc/100) }`)

// console.log('ejerciio 8\n')
// let presuH,psi,ped,trau,porPsi,porPed,porTrau,porT
// presuH=+prompt("digite el presupuesto anual del hsopital ")
// psi=+prompt('digite el porcentaje de psiquiatria  ')
// ped=+prompt('digite el porcentaje de pediatria  ')
// trau=+prompt('digite el porcentaje de traumatologia  ')
// porPsi= psi *presuH / 100
// porPed= ped *presuH / 100
// porTrau= trau *presuH / 100
// porT = (psi+ped+trau)
// if (porT == 100){
//     console.log(`psquiatria:\tporcentaje:${psi}%\tpresupuesto anual:${porPsi}\npediatria:\tporcentaje:${ped}%\tpresupuesto anual:${porPed}\ntraumatologia:\tporcentaje:${trau}%\t$presupuesto anual:${porTrau}`)
// }else{
//     console.log('error')
// }
console.log('ejercicio 9\n')
let precio,km,estancia,reduc
precio=2.5
km =+prompt("digite la distancia en km que recorrio ida y vuelta el avion ")
estancia=+prompt('digite cuantos dias estuvo de estancia ')
if (km >800 && estancia >=7 ){
    reduc=0.30
}else{
    reduc =0
}
console.log(`el precio del tiquete ida y vuelta es de ${precio*km-(precio * km * reduc)}`)