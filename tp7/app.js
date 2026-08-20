//ejercicio 1
let  ej1 = document.querySelector ("#ej1")
let btnEj1 = document.querySelector ("#btnEj1")
let edad= 18

btnEj1.onclick=function (){
    if (edad>=18) {
        ej1.textContent= "sos mayor de edad"
    } else {
        ej1.textContent="sos menor de edad"
    }
}

//ejercicio 2 y 3

let nombreUsuario= "kjkkj"
let parrafo= document.querySelector ("#parr")
let btn2 = document.querySelector("#btn2")


btn2.onclick=function (){
    if (nombreUsuario == "Nahuel" || nombreUsuario == "Marcos") {
        parrafo.textContent= "Bienvenido " + nombreUsuario+ " ,cómo estas?"
    } else {
        parrafo.textContent="Bienvenido Usuario"
    }
} 
//ejercicio 4
let numero = 0
let btn4= document.querySelector("#btn4")
let parrafo= document.querySelector("#parrafo")

btn4.onclick=function(){
    if (numero > 0) {
       parrafo.textContent = "el numero es positivo"
    } else if (numero < 0) {
        parrafo.textContent="el numero es negativo"
    } else if (numero == 0) {
        parrafo.textContent="el numero es cero"
    }

}
//ejercicio 5 
let edad=6
let parrafo = document.querySelector("#p5")
if (edad > 6 && edad < 11) {
    parrafo.textContent="sos un niño"
} else if (edad > 12 && edad < 18) {
    parrafo.textContent="sos un adolescente"
} else if (edad > 19 && edad < 26) {
    parrafo.textContent="sos un joven"
} else if (edad > 27 && edad < 59) {
    parrafo.textContent="sos un adulto"
} else if (edad > 60 ) {
    parrafo.textContent="sos un anciano"
} else  {
    parrafo.textContent="sos un bebé"
}
//ejercicio 7 
let btn7= document.querySelector("#btn7")
let parrafo= document.querySelector("#ej7")
let contra= 181222

btn7.onclick=function(){
if (contra=181222) {
    parrafo.textContent="Acceso concedido"
} else {
    parrafo.textContent= "Acceso denegado"
}
}

//ejercicio 6

let dia = "domingo"
let btn6= document.querySelector("#btn6")
let parrafo= document.querySelector("#pej6")

btn6.onclick=function(){
if (dia == "lunes"|| dia== "martes"|| dia== "miercoles"|| dia== "jueves"|| dia=="viernes") {
    parrafo.textContent="Es un dia laborable"
} else {
    parrafo.textContent="Es fin de semana"
}
}

