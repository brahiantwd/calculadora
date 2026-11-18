
function sumar() {

    let numero1 = Number(document.getElementById("numero1").value);

    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}


function restar() {

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 - numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}


function multiplicar() {

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}


function dividir() {

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    if (numero2 == 0) {

        document.getElementById("resultado").innerHTML = "No se puede dividir entre cero";

    } else {

        let resultado = numero1 / numero2;

        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    }

}
