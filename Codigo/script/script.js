$(document).ready(function () {
    $('.ocultarUsuario').css({"display":"none"});
    abrirCerrarModalLogin();
    abrirCerrarModalRegistro();
    enviarDatosInicioSesion();
    chechCamposRegistro();
    like();
    anadirAmigo();
    //setCookie('admin','admin1234',2);
    //alert(getCookie('hola'));

});


//Parte 2
function abrirCerrarModalLogin() {
    $('#botonEntrar').click(function () {
        $('.ventanaLogin').fadeIn();
    });
    $('#iconoCerrarModalLogin').click(function () {
        $('.ventanaLogin').fadeOut();
    });
}

function abrirCerrarModalRegistro() {
    $('#botonRegistrar').click(function () {
        $('.ventanaRegistro').fadeIn();
    });
    $('#iconoCerrarModalRegistro').click(function () {
        $('.ventanaRegistro').fadeOut();
    });
}

function enviarDatosInicioSesion() {
    $('#enviarDatosLogin').click(function () {
        // alert($('#nombreUsuario').val());
        // alert($('#passUsuario').val());
        var estado = checkCookie($('#nombreUsuario').val(), $('#passUsuario').val());
        if (estado == true) {
            //$('#textoNombreUsuario').text("Bienvenid@ " + $('#nombreUsuario').val());
            $('.ocultarUsuario').css({"display":"inline-block"});
            $('#botonEntrar').hide();
            $('#botonRegistrar').hide();
            $('.ventanaLogin').fadeOut();
            alert("Bienvenid@ " + $('#nombreUsuario').val());
        } else {
            alert("El usuario no existe");
        }
    });

}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkCookie(nombreCookie, valorCookie) {
    var pass = getCookie(nombreCookie);
    if (pass != "" && pass == valorCookie) {
        return true;
    } else {
        return false;
    }

}


function chechCamposRegistro() {


    $('#enviarDatosRegistro').click(function (event) {
        var correcto1 = false;

        if ($('#contrasenaRegistro').val() === $('#contrasena2Registro').val()) {
            $('#errorContrasenaIguales').slideUp();
            correcto1 = true;
        } else {
            $('#errorContrasenaIguales').slideDown();
            correcto1 = false;
        }

        if ($('#formularioRegistro')[0].checkValidity() == true && correcto1 == true) {
            if ($('#nombreUsuarioRegistro').val() != "" && $('#contrasenaRegistro').val() != "") {
                setCookie($('#nombreUsuarioRegistro').val(), $('#contrasenaRegistro').val(), 2);
            }
            $('.ventanaRegistro').fadeOut();
            alert("Se ha relleneado correctamente");
            $('#botonEntrar').click();
            //window.location.href = "mailto:" + $('#emailRegistro').val();
            //setTimeout(function(){window.location.href = "index.html";}, 100);


        } else {
            //alert("todo mal");
        }

    });
}
function like(){
$(".fav").click(function() {
        if (this.firstChild.style.color == "red") {
            this.firstChild.style.color = "#ffa804";
        } else {
            this.firstChild.style.color = "red";
        }
    });
}

function anadirAmigo(){
    $(".amigoNuevo").click(function() {

        if ($(".amigoNuevo span").html() == "Cancelar Solicitud") {
            $(".amigoNuevo span").html("Añadir amigo");
            $(".amigoNuevo i").addClass("ion-person-add");
            $(".amigoNuevo i").removeClass("ion-close");
        } else {
            $(".amigoNuevo span").html("Cancelar Solicitud");
            $(".amigoNuevo i").removeClass("ion-person-add");
            $(".amigoNuevo i").addClass("ion-close");
        }

    });
}
