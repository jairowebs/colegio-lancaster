<?php

$conexion = mysqli_connect("localhost", "root", "", "codelogy_users");

if($conexion ){
    echo 'conexion exitosa'
} else{
    echo 'no hubo conexion'
}



?>