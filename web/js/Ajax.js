console.log("Entramos :D");
let usados = new Array();
let limite = true;

let pre = document.querySelector('#pr');
let r1 = document.querySelector('#rp1');
let r2 = document.querySelector('#rp2');
let r3 = document.querySelector('#rp3');
let r4 = document.querySelector('#rp4');

document.querySelector('#ejecutar').addEventListener('click', CargarPregunta);
function CargarPregunta() {
//console.log("Entramos a la funcion :D");
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'Json/preguntas.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            //let
            if (limite) {
                let sel = getRandomArbitrary(0, datos.length)
                usados.push(sel);
                pre.innerHTML = datos[sel].Pregunta;
                r1.innerHTML = datos[sel].Resp1;
                r2.innerHTML = datos[sel].Resp2;
                r3.innerHTML = datos[sel].Resp3;
                r4.innerHTML = datos[sel].Resp4;
            } else {

                pre.innerHTML = "Caramba nos hemos quedado sin mas preguntas que hacerte, debes ser bastante bueno :D";
            }
            limite = (datos.length > usados.length);
            console.log("Vamos en: " + datos.length + " vs " + usados.length + " = " + limite);

            console.log(usados.toString() + " " + limite);
        }
    }

    function getRandomArbitrary(min, max) {
        let random;
        let exist = true;
        do {
            exist = false;
            random = Math.floor(Math.random() * (max - min)) + min;
            console.log(random);
            for (var item of usados) {

                console.log(item + " " + random + "  = " + (item === random));
                if (item === random) {
                    exist = true;
                }
            }
        } while (exist)
        return random;
    }
}

