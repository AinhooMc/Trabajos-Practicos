function calcularPrecio(litros,nafta){
    if (nafta == "super") {
        let cal =litros*1500
        p.textContent="El tipo de nafta es " + nafta + " y el precio total a pagar es de " + cal
    } else if (nafta == "premium"){
        let calculo = litros*2000
        p.textContent="El tipo de nafta es " + nafta + " y el precio total a pagar es de " + calculo
    }else {
     p.textContent="ingrese un tipo de nafta por favor"
    }
}