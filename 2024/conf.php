<?php 
function conexao_banco(){
//Definindo variaveis para acessa o banco

$server_name = ('10.28.0.41');
$user = ('root');
$password = ('SenhaSegura!123');
$base = ('concurso');

$conn = new mysqli($server_name, $user, $password, $base);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}
return $conn;
}

?>