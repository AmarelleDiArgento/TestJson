function validar(valor, campo) {
  //console.log("valor: " + valor + "campo: " + campo)
  if (valor == campo) {
    sweetOk();
  } else {
    sweetError();
  }

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

function sweetOk() {
  swal({
      title: "Genial!",
      text: "Haces un gran trabajo",
      icon: "success",
      class: "swal-footer",
      buttons: true,
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
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
  });

}
