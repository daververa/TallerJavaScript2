
const pedidos = [];

function agregarPedido(articulo, cantidad, precio) {
    pedidos.push({
        articulo: articulo,
        cantidad: cantidad,
        precio: precio,
    });
}

function calcularTotal() {
    let total = 0;
    for (const pedido of pedidos) {
        total += pedido.cantidad * pedido.precio;
    }
    return total;
}

while (true) {

    const articulo = prompt("Ingrese el artículo: ");
    const cantidad = parseInt(prompt("Ingrese la cantidad: "));
    const precio = parseInt(prompt("Ingrese el precio: "));

    agregarPedido(articulo, cantidad, precio);

    console.log("Su pedido ha sido tomado exitosamente.");

    const respuesta = prompt("¿Desea realizar otro pedido? (S/N): ");
    if (respuesta === "N") {
        break;
    }
}

console.log("El total de los pedidos es: $", calcularTotal());