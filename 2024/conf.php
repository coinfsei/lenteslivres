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
    };

    function validar_foto($foto){

        $extencao =['jpeg','jpg','png','pdf'];

        $testa_extencao = strtolower(pathinfo($foto, PATHINFO_EXTENSION));

        if(!in_array($testa_extencao,$extencao)){

            header("location: inscricao.php?cadastro=falha");
            exit();
        }
    }

    function validar_video($video){

        $extencao =['mp4'];

        $testa_extencao = strtolower(pathinfo($video, PATHINFO_EXTENSION));

        if(!in_array($testa_extencao,$extencao)){

            header("location: inscricao.php?cadastro=falha");
            exit();
        }
    }

    function validar_arquivo($arquivo){

        $extencao =['pdf'];

        $testa_extencao = strtolower(pathinfo($arquivo, PATHINFO_EXTENSION));

        if(!in_array($testa_extencao,$extencao)){

            header("location: inscricao.php?cadastro=falha");
            exit();
        }
    } 
    
    ?>
