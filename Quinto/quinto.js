function agregarColores(colores) {
  var lista = document.createElement('ul');

  colores.forEach(function (color) {
    var elemento = document.createElement('li');
    elemento.textContent = color;
    lista.appendChild(elemento);
  });

  document.body.appendChild(lista);
}

agregarColores(['rojo', 'verde', 'azul']);
