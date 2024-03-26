<?php
// Verificar las credenciales
$usuario_autorizado = "123";
$contraseña_autorizada = "123";

if ($_POST["username"] === $usuario_autorizado && $_POST["password"] === $contraseña_autorizada) {
    // Si las credenciales son correctas, redirigir a la página autorizada
    header("Location: pagina_autorizada.php");
    exit();
} else {
    // Si las credenciales son incorrectas, mostrar un mensaje de error
    echo "Usuario o contraseña incorrectos.";
}
?>
