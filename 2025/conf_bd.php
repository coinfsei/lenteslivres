<?php


function conexao_banco() {
    ini_set('display_errors', 'Off');
    
	/*$env = file_get_contents(__DIR__."\.env");
    $lines = explode("\n",$env);

    foreach($lines as $line){
	preg_match("/([^#]+)\=(.*)/",$line,$matches);
	if(isset($matches[2])){ putenv(trim($line)); }
	} 
	
	$server_name = getenv('SERVER_NAME');
	$user = getenv('USER');
	$password = getenv('PASSWORD');
    $base = getenv('DATABASE_NAME');
	
	*/
	
    $server_name = '10.28.0.42';
    $user = 'root';
    $password = 'SenhaSegura!123';
    $base = 'concurso';

    $conn = new mysqli($server_name, $user, $password, $base);
    
    if ($conn->connect_error) {
        die("Erro de conexão: " . $conn->connect_error);
    }

    return $conn;
}

function verificar_usr($user, $password) {
    $conn = conexao_banco();

    $sql = "SELECT * FROM usuario WHERE usr = ? AND senha = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        return true;
    } else {
        return false;
    }
}