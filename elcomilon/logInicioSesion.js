$(document).ready(function(){

    $("#email").blur(function () { 
        var email = "#email";
        var error = "#errorEmail";
        validarCorreo(email,error);
    });

    $("#emailFormulario").blur(function () {
        var email = "#emailFormulario";
        var error = "#errorEmailFormulario"; 
        validarCorreo(email,error);
        
        
    });

    //VALIDACION PARA QUE LAS CONTRASEÑAS SEAN IGUALES EN EL FORMULARIO
    $("#confirmarContrasena").blur(function () {  
        var contraseña1 = $("#contrasenaGuardar").val();
        var contraseña2 = $("#confirmarContrasena").val();

        if(contraseña1 != contraseña2){
            alert("las contraseñas no coinciden");
        }
        
    });

    $("#inicioSesion").submit(function (e) { 
        var correo =$("#email").val();
        var contraseña = $("#clave").val();
        if(validarInicioSesion(correo, contraseña)){
            alert("Se ha iniciado correctamente");
        }else{
            alert("Correo o contaseña incorrecto");
        }
        
    });


})

function validarCorreo(idCorreo, idMsjError){
    var expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var valorInput = $(idCorreo).val();
    var comprobacion = expresionRegular.test(valorInput); //SE TESTEA(COMPARA) QUE EL VALOR CON LA EXPRESION

    if(!comprobacion){ 

        $(idMsjError).text("Email invalido");
        $(idMsjError).css("color", "red");
        
    }else{

        $(idMsjError).text("");
    }
}

function validarInicioSesion(correo, contraseña){
    
    //SE GUARDAN LOS DATOS EN LOCALSTORAGE PARA 

    let usuarios = {
        

    }
    
    var valorCorreo = $(correo).val();
    var valorContraseña = $(contraseña).val();

   

}

function guardarUsuarios(correo, clave){

    let usuario ={
        correoUsuario : correo,
        claveUsuaio   : clave
    }

}

