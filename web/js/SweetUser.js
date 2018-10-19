function jugador() {
  swal({
      title: "Bienvenido amigo",
      text: "¿Cual es tu nombre?",
      content: "input",
      button: {
        text: "A jugar!",
        closeModal: false,
      },
    })
    .then(result => {
      console.log(result);
      var name = "Jugador: ";
      for (let n of result) {
        name += n;
      }
      loader(name);

      swal.stopLoading();
      swal.close();

    });
}

function sweerConf(valor, campo) {
  swal({
      title: "¿Estas seguro?",
      text: "pueder pensarlo un poco antes de continuar... ",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        validar(valor, campo);
      }
    });
}

function validar(valor, campo) {
  //console.log("valor: " + valor + "campo: " + campo)
  if (valor == campo) {
    sweetOk();
  } else {
    sweetError();
  }
}

function sweetOk() {
  swal({
      title: "Genial!",
      text: "Haces un gran trabajo",
      icon: "success",
      class: "swal-footer",
      button: "Seguimos?",
    })
    .then((seguir) => {
      if (seguir) {
        CargarPregunta();
      }
    });
}

function sweetError() {
  swal({
    title: "Ups!",
    text: "Mas suerte para la proxima",
    icon: "error",
    class: "swal-footer",
    buttons: false,
    timer: 5000,
    closeOnEsc: false,
  })

  setTimeout(recargar, 5000);

  function recargar() {
    location.reload(true);
    document.getElementById("benv").value = "Bienvenido nuevamente";
  }

  ;

}
