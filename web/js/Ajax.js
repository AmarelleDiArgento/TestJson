console.log("Entramos :D");
document.querySelector('#ejecutar').addEventListener('click', CargarPregunta);

function CargarPregunta(){
  //console.log("Entramos a la funcion :D");
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'Json/preguntas.json', true)
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let 
      /* console.log(datos);
      for (let item of datos) {
        console.log(item.Id);
      }
      */
    }
  }


}
