$(document).ready(function () {
    
    // ABRIR EL INICIO DE SESION
    $("#btnAbrirIncioSesion").click(function () { 
        window.open("inicioSesionApp.html")
        
    });
    $("#btnBuscar").click(function () { 
        buscar();
    });
    
});




// PROBAR COMO CAMBIAR DINAMICAMENTE AL BUSCAR
function buscar(){

    var elementoBuscar = $("#buscador").val();
    console.log(elementoBuscar);

    var elementosMostrar = `
    <div class="container mt-4">
        <h1 class="text-center">Descubre nuestros productos</h1>
        <div class="row">

        </div>
    </div>
    `;
    
}