window.addEventListener('load', () => {
  setTimeout(jugador, 1000);
});



function loader(player) {
  document.getElementById("circulo").className = 'hide';
  document.getElementById("contenido").className = 'container';

  console.log("Entramos :D \n" + player);

  let jug = document.querySelector('#jugador');
  jug.innerHTML = `
  <h5 class="orange-text" >${player} </h5>
  `
  CargarPregunta();
}

let usados = new Array();
let limite = true;




function CargarPregunta() {
  let pre = document.querySelector('#botCamp');
  //console.log("Entramos a la funcion :D");
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'json/preguntas.json', true)
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      //let
      pre.innerHTML = '';
      if (limite) {
        let sel = getRandomArbitrary(0, datos.length)
        usados.push(sel);
        pre.innerHTML = `
                <div class="row center">
  <div class="col s12 m12 l12 campo ">
    <p><h4>${datos[sel].Pregunta}</h4></p>
  </div>

                    <div class="col s12 m6 l6 campo margin1">
                        <a class="btn waves-effect width-all" onclick="sweerConf(1,${datos[sel].Correcta})" >${datos[sel].Resp1}</a>
                    </div>
                    <div class="col s12 m6 l6 campo margin1">
                        <a class="btn waves-effect width-all" onclick="sweerConf(2,${datos[sel].Correcta})" >${datos[sel].Resp2}</a>
                    </div>      <div class="col s12 m6 l6 campo margin1">
                        <a class="btn waves-effect width-all" onclick="sweerConf(3,${datos[sel].Correcta})" >${datos[sel].Resp3}</a>
                    </div>      <div class="col s12 m6 l6 campo margin1">
                        <a class="btn waves-effect width-all" onclick="sweerConf(4,${datos[sel].Correcta})" >${datos[sel].Resp4}</a>
                    </div>
  `
      } else {

        pre.innerHTML = "<H1>Caramba nos hemos quedado sin mas preguntas que hacerte, debes ser bastante bueno :D </H1>";
      }
      limite = (datos.length > usados.length);
      console.log("Vamos en: " + datos.length + " vs " + usados.length + " = " + limite);

      console.log(usados.toString() + " " + limite);
      var barra = (usados.length - 1) * 10;
      document.getElementById("barra").value = barra;

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
