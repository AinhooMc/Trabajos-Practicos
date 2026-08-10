/*ejercicio 1
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

ejercicio 2

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
ejercicio 4*/
let numero = 8
let parrafo= document.querySelector ("#ej4p")
let btn4= document.querySelector("#btn4")

btn4.onclick=function(){
    if (numero > 0) {
        parrafo.textContent= "el numero es positivo"
    } else {
        
    }
}