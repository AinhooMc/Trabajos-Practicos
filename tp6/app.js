let boton1= document.querySelector ("#boton1")
let boton2= document.querySelector ("#boton2")
let boton3= document.querySelector ("#boton3")
let boton4= document.querySelector ("#boton4")
let boton5=document.querySelector ("#boton5")
let boton6= document.querySelector ("#boton6")
let boton7= document.querySelector("#boton7")
let boton8= document.querySelector ("#boton8")

let p= document.querySelector ("#texto")

boton1.onclick=function (){
    p.textContent= "soy ainho"
}

boton2.onclick=function(){
    p.style.backgroundColor= "Navy"
}

boton3.onclick=function(){
    p.style.color= "blue"
}
boton4.onclick=function(){
    p.style.fontFamily= "Georgia"
}

boton5.onclick=function(){
    p.style.fontSize='25px'
}

boton6.onclick=function(){
    p.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem debitis, quidem ipsam doloribus quia, adipisci unde amet, reiciendis placeat quasi sapiente neque cumque blanditiis ut quam fugiat facilis! Soluta, tempore?"
    p.style.backgroundColor= "#507697"
    p.style.color= "white"
    p.style.fontFamily="Arial"
    p.style.fontSize='15px'
}

boton7.onclick=function(){
    body.style.backgroundColor="white"
}