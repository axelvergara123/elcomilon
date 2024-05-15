$(document).ready(function() {
    //Variable que mantiene el estado visible del carrito
    var carritoVisible = false;

    //Agregremos funcionalidad a los botones eliminar del carrito
    $('.btn-eliminar').click(eliminarItemCarrito);

    //Agrego funcionalidad al boton sumar cantidad
    $('.sumar-cantidad').click(sumarCantidad);

    //Agrego funcionalidad al buton restar cantidad
    $('.restar-cantidad').click(restarCantidad);

    //Agregamos funcionalidad al boton Agregar al carrito
    $('.boton-item').click(agregarAlCarritoClicked);

    //Agregamos funcionalidad al botón comprar
    $('.btn-pagar').click(pagarClicked);

    //Eliminamos todos los elementos del carrito y lo ocultamos
    function pagarClicked() {
        alert("Gracias por la compra");
        //Elimino todos los elmentos del carrito
        $('.carrito-items').empty();
        actualizarTotalCarrito();
        
    }

    //Funcion que controla el boton clickeado de agregar al carrito
    function agregarAlCarritoClicked(event) {
        var button = $(event.target);
        var item = button.parent(); // se selecciona el elemento padre para buscar su info
        var titulo = item.find('.card-title').text(); //find se utiliza para buscar algo en especifico
        var precio = item.find('.precio-item').text();
        var imagenSrc = item.parent().find('.card-img-top').attr('src'); // en este caso tengo que buscar al item padre del padre

        agregarItemAlCarrito(titulo, precio, imagenSrc);

        
    }

    //Funcion que hace visible el carrito


    //Funciòn que agrega un item al carrito
    function agregarItemAlCarrito(titulo, precio, imagenSrc) {
        var item = $('<div class="item mt-2"></div>');
        var itemsCarrito = $('.carrito-items');

        //controlamos que el item que intenta ingresar no se encuentre en el carrito
        var nombresItemsCarrito = itemsCarrito.find('.carrito-item-titulo');
        nombresItemsCarrito.each(function() {
            if ($(this).text() === titulo) {
                alert("El item ya se encuentra en el carrito");
                return;
            }
        });

        var itemCarritoContenido = `
            <div class="carrito-item">
                <img src="${imagenSrc}" width="80px" alt=""> 
                <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
                <div class="carrito-item-detalles">
                    <span class="carrito-item-titulo">${titulo}</span>
                    <div class="selector-cantidad">
                        <i class="fa-solid fa-minus restar-cantidad"></i>
                        <input type="text" value="1" class="carrito-item-cantidad" disabled>
                        <i class="fa-solid fa-plus sumar-cantidad"></i>
                    </div>
                    <span class="carrito-item-precio">${precio}</span>
                </div>
            </div>
        `;
        item.html(itemCarritoContenido);
        itemsCarrito.append(item);

        //Agregamos la funcionalidad eliminar al nuevo item
        item.find('.btn-eliminar').click(eliminarItemCarrito);

        //Agregmos al funcionalidad restar cantidad del nuevo item
        item.find('.restar-cantidad').click(restarCantidad);

        //Agregamos la funcionalidad sumar cantidad del nuevo item
        item.find('.sumar-cantidad').click(sumarCantidad);

        //Actualizamos total
        actualizarTotalCarrito();
    }

    //Aumento en uno la cantidad del elemento seleccionado
    function sumarCantidad(event) {
        var buttonClicked = $(event.target); // devulve el elemento que tuvo un evento
        var selector = buttonClicked.parent();
        var cantidadActual = parseInt(selector.find('.carrito-item-cantidad').val());
        cantidadActual++;
        selector.find('.carrito-item-cantidad').val(cantidadActual);
        actualizarTotalCarrito();
    }

    //Resto en uno la cantidad del elemento seleccionado
    function restarCantidad(event) {
        var buttonClicked = $(event.target);
        var selector = buttonClicked.parent();
        var cantidadActual = parseInt(selector.find('.carrito-item-cantidad').val());
        cantidadActual--;
        if (cantidadActual >= 1) {
            selector.find('.carrito-item-cantidad').val(cantidadActual);
            actualizarTotalCarrito();
        }
    }

    //Elimino el item seleccionado del carrito
    function eliminarItemCarrito(event) {
        $(event.target).parent().parent().remove();
        //Actualizamos el total del carrito
        actualizarTotalCarrito();
        //La siguiente función controla si hay elementos en el carrito
        //Si no hay, elimino el carrito
        ocultarCarrito();
    }

    //Funcion que controla si hay elementos en el carrito. Si no hay, oculto el carrito.


    //Actualizamos el total de Carrito
    function actualizarTotalCarrito() {
        var total = 0;
        $('.carrito-item').each(function() {
            var precio = parseFloat($(this).find('.carrito-item-precio').text().replace('$', '').replace('.', ''));
            var cantidad = parseInt($(this).find('.carrito-item-cantidad').val());
            total += precio * cantidad;
        });
        total = Math.round(total * 100) / 100;
        $('.carrito-precio-total').text('$' + total.toLocaleString("es-CL") ); //adaptamos el formato para que apresca de esta forma 10.000,00
    }
});
