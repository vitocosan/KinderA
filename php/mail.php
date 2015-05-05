<?php
/*
phpinfo();
*/

function redirect($url)
{
    $string = '<script type="text/javascript">';
    $string .= 'window.location = "' . $url . '"';
    $string .= '</script>';

    echo $string;
};

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);

$fecha = time();
$fechaFormateada = date("j/n/Y", $fecha);

$textoEmisor = "MIME-VERSION: 1.0\r\n";
$textoEmisor .= "Content-type: text/html; charset=UTF-8\r\n";
$textoEmisor .= "From: kindera.infowebchile.com";

//Correo de destino; donde se enviará el correo.
$correoDestino = "rodriguezgomez.p@gmail.com,m.arredondovargas@hotmail.com,Eduardo.Chavez@mercurio.cl,iaranda@gasco.cl,bibliorobertai@gmail.com,vitocosan@gmail.com";
//$correoDestino = "vitocosan@gmail.com";

//Formateo el asunto del correo
$asunto = "Contacto Kinder A Colegio HispanoAmericano";

//Formateo el cuerpo del correo
$cuerpo = "<h2>Kinder A Colegio HispanoAmericano</h2><br />";
$cuerpo .= "<p>Un apoderado a enviado el siguiente mensaje:</p>";
$cuerpo .= "<p><i>" . $message . "</i></p><br />";
$cuerpo .= "<p>Los datos del apoderado son lo siguientes:</p>";
$cuerpo .= "<b>Nombre: </b>" . $name . "<br />";
$cuerpo .= "<b>Email: </b>" . $email . "<br />";
$cuerpo .= "<b>Fecha: </b>" . $fechaFormateada . "<br />";


// Envío el mensaje
mail( $correoDestino, $asunto, $cuerpo, $textoEmisor);

if(headers_sent()){
    // las cabeceras ya se han enviado, no intentar añadir una nueva
	redirect("http://kindera.infowebchile.com");
}
else{
    // es posible añadir nuevas cabeceras HTTP
	header("Location: http://kindera.infowebchile.com");
}

exit();

?>
