<?php


function conexao_banco() {
    ini_set('display_errors', 'Off');
    
    $server_name = '10.28.246.66';
    $user = 'usr_sei_lenteslivres';
    $password = '5sr_S23_L2nt2sL3vr2s';
    $base = 'bd_sei_lenteslivres';

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