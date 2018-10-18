console.log("Entramos :D");

let usados = new Array();

document.querySelector('#ejecutar').addEventListener('click', CargarPregunta);

function CargarPregunta() {
  //console.log("Entramos a la funcion :D");
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'json/preguntas.json', true)
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      //let

      let sel = getRandomArbitrary(0, datos.length - 1)
      usados.push(sel);

      let pre = document.querySelector('#pr');
      let r1 = document.querySelector('#rp1');
      let r2 = document.querySelector('#rp2');
      let r3 = document.querySelector('#rp3');
      let r4 = document.querySelector('#rp4');

      pre.innerHTML = datos[sel].Pregunta;
      r1.innerHTML = datos[sel].Resp1;
      r2.innerHTML = datos[sel].Resp2;
      r3.innerHTML = datos[sel].Resp3;
      r4.innerHTML = datos[sel].Resp4;

      console.log(usados.toString());

      /*for (let item of datos) {
        console.log(item.Id);
      }
      */
    }
  }

  function getRandomArbitrary(min, max) {
    let random;
    let exist = true;
    let ciclo = 0

    while (ciclo >= usados.length) {

      //console.log(!exist && ciclo <= usados.length);
      random = Math.floor(Math.random() * (max - min)) + min;
      console.log(ciclo + ", " + random);
      /*for (let i of usados) {
        console.log(i + " " + random + " " + i == random);
        if (i == random) {
          exist = false;
          break;
        }*/
      }
      ciclo++;
    }

    return random;
  }
}
