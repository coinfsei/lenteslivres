<?php 
function conexao_banco(){
	
	try {
	
    //Definindo variaveis parar acessa o banco
    ini_set('display_errors', 'Off');
    
    $server_name = ('10.28.0.41');
    $user = ('root');
    $password = ('SenhaSegura!123');
    $base = ('concurso');
    
    $conn = new mysqli($server_name, $user, $password, $base);
    
    if ($conn->connect_error) {
        die("Erro de conexão: " . $conn->connect_error);
    }
    return $conn;
	} catch(Exception $e) {
		
	}
}	
	if (!file_exists('uploads')) {
    mkdir('uploads', 0755, true);
	}
	if (!file_exists('uploads/comprovante_residencia/')) {
    mkdir('uploads/comprovante_residencia/', 0755, true);
	}
	if (!file_exists('uploads/declaracao_de_autoria/')) {
    mkdir('uploads/declaracao_de_autoria/', 0755, true);
	}
	if (!file_exists('uploads/docu_identidade/')) {
    mkdir('uploads/docu_identidade/', 0755, true);
	}
	if (!file_exists('uploads/identificacao_do_candidato/')) {
    mkdir('uploads/identificacao_do_candidato/', 0755, true);
	}
	if (!file_exists('uploads/termo_de_premiacao/')) {
    mkdir('uploads/termo_de_premiacao/', 0755, true);
	}
	if (!file_exists('uploads/video/')) {
    mkdir('uploads/video/', 0755, true);
	}

    function validar_foto($foto){
		
		try {

        $extencao =['jpeg','jpg','png','pdf'];

        $testa_extencao = strtolower(pathinfo($foto, PATHINFO_EXTENSION));

        if(!in_array($testa_extencao,$extencao)){

            header("location: inscricao.php?cadastro=arquivo_invalido");
            exit();
        }
		
		} catch(Exception $e) {
			echo "<h2>Inscrição não foi possivel ser realizada! Erro desconhecido!</h2><p>{$e}";
		}
    }

    function validar_video($video){
		
		try {
        $extensao =['mp4','m4a','mkv','webm'];

        $testa_extensao = strtolower(pathinfo($video, PATHINFO_EXTENSION));

        if(!in_array($testa_extensao,$extensao)){

            header("location: inscricao.php?cadastro=arquivo_invalido");
            exit();
        }
		} catch(Exception $e) {
			echo "<h2>Inscrição não foi possivel ser realizada! Erro desconhecido!</h2><p>{$e}";
		}
    }

    function validar_arquivo($arquivo){

		try {
        $extencao =['doc','docx'];

        $testa_extencao = strtolower(pathinfo($arquivo, PATHINFO_EXTENSION));

        if(!in_array($testa_extencao,$extencao)){

            header("location: inscricao.php?cadastro=arquivo_invalido");
            exit();
        }
		} catch(Exception $e) {
			echo "<h2>Inscrição não foi possivel ser realizada! Erro desconhecido!</h2><p>{$e}";
		}
    } 

    function move_arquivo($arquivo){

		try {
        $conn = conexao_banco();
//
        if(preg_match("/_video/",$arquivo)){

            $caminho = 'uploads/video/' . $arquivo;

            move_uploaded_file($_FILES['video']['tmp_name'], $caminho);

                        return $caminho;
//
        }elseif(preg_match("/_compro_residencia/",$arquivo)){

            $caminho = 'uploads/comprovante_residencia/' . $arquivo;

                     move_uploaded_file($_FILES['foto']['tmp_name'], $caminho);

                        return $caminho;
//
        /*}elseif(preg_match("/_decla_autoria/",$arquivo)){

            $caminho = 'uploads/declaracao_de_autoria/' . $arquivo;

            move_uploaded_file($_FILES['decla_autoria']['tmp_name'], $caminho);

                        return $caminho ;
                        */

        }elseif(preg_match("/_desc_prop/",$arquivo)){
//
            $caminho = 'uploads/desc_prop/' . $arquivo;

            move_uploaded_file($_FILES['desc_prop']['tmp_name'], $caminho);

    
                        return $caminho;

        }elseif(preg_match("/_termo_premi/",$arquivo)){

            $caminho = 'uploads/termo_de_premiacao/' . $arquivo;

            move_uploaded_file($_FILES['termo_premi']['tmp_name'], $caminho);

                        return $caminho;

        }elseif(preg_match("/_documen_identidade/",$arquivo)){

            $caminho = 'uploads/docu_identidade/' . $arquivo;

            move_uploaded_file($_FILES['identidade']['tmp_name'], $caminho);

                        return $caminho;

        }else{

            return false;

        }
		} catch(Exception $e) {
			echo "<h2>Inscrição não foi possivel ser realizada! Erro desconhecido!</h2><p>{$e}";
		}
		
	}
    
    ?>