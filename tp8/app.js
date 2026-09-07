//ejercicio 1
let  ej1 = document.querySelector ("#ej1")
let btnEj1 = document.querySelector ("#btnEj1")
let edad1= input1.value
let input1=document.querySelector ("#input1")

btnEj1.onclick=function (){
    if (edad1.value >=18) {
        ej1.textContent= "sos mayor de edad"
    } else {
        ej1.textContent="sos menor de edad"
    }
}

//ejercicio 2 y 3

let nombreUsuario= input2.value
let parrafo1= document.querySelector ("#parr")
let btn2 = document.querySelector("#btn2")
let input2=document.querySelector ("#input2")


btn2.onclick=function (){
    if (nombreUsuario.value == "Nahuel" || nombreUsuario.value == "Marcos") {
        parrafo1.textContent= "Bienvenido " + nombreUsuario+ " ,cómo estas?"
    } else {
        parrafo1.textContent="Bienvenido Usuario"
    }
} 
//ejercicio 4
let numero = input3.value
let btn4= document.querySelector("#btn4")
let parrafo2= document.querySelector("#parrafo")
let input3=document.querySelector ("#input3")

btn4.onclick=function(){
    if (numero.value > 0) {
       parrafo2.textContent = "el numero es positivo"
    } else if (numero.value < 0) {
        parrafo2.textContent="el numero es negativo"
    } else if (numero.value == 0) {
        parrafo2.textContent="el numero es cero"
    }

}
//ejercicio 5 
let edad2=input4.value
let parrafo3 = document.querySelector("#p5")
let btn5=document.querySelector("#btn5")
let input4=document.querySelector ("#input4")

btn5.onclick=function(){
if (edad2.value > 6 && edad2.value < 11) {
   parrafo3 .textContent="sos un niño"
} else if (edad2.value > 12 && edad2.value < 18) {
    parrafo3.textContent="sos un adolescente"
} else if (edad2.value > 19 && edad2.value < 26) {
    parrafo3.textContent="sos un joven"
} else if (edad2.value > 27 && edad2.value < 59) {
    parrafo3.textContent="sos un adulto"
} else if (edad2.value > 60 ) {
    parrafo3.textContent="sos un anciano"
} else  {
    parrafo3.textContent="sos un bebé"
}
}

//ejercicio 7 
let btn7= document.querySelector("#btn7")
let parrafo4= document.querySelector("#ej7")
let contra= input6.value
let input6=document.querySelector ("#input6")

btn7.onclick=function(){
if (contra=181222) {
    parrafo4.textContent="Acceso concedido"
} else {
    parrafo4.textContent= "Acceso denegado"
}
}

//ejercicio 6

let dia = input5.value
let btn6= document.querySelector("#btn6")
let parrafo5= document.querySelector("#pej6")
let input5=document.querySelector ("#input5")

btn6.onclick=function(){
if (dia.value == "lunes"|| dia.value== "martes"|| dia.value== "miercoles"|| dia.value== "jueves"|| dia.value=="viernes") {
    parrafo5.textContent="Es un dia laborable"
} else {
    parrafo5.textContent="Es fin de semana"
}
}

