<?php 

    function validar_foto($foto){
		
		try {

        $extensao =['jpeg','jpg','png','pdf'];

        $testa_extensao = strtolower(pathinfo($foto, PATHINFO_EXTENSION));

        if(!in_array($testa_extensao,$extensao)){

            header("location: inscricao.php?cadastro=arquivo_invalido");
            exit();
        }
		
		} catch(Exception $e) {
			echo "<h2>Inscrição não foi possivel ser realizada! Erro desconhecido!</h2><p>{$e}";
		}
    }

    function validar_video($video){

		try {
        $extensao =['mp4','m4v','m4a','mov','webm','mkv'];

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
            
        $extensao =['pdf'];

        $testa_extensao = strtolower(pathinfo($arquivo, PATHINFO_EXTENSION));

        if(!in_array($testa_extensao,$extensao)){

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
        }elseif(preg_match("/_comprovante_residencia/",$arquivo)){

            $caminho = 'uploads/comprovante_residencia/' . $arquivo;

                     move_uploaded_file($_FILES['foto']['tmp_name'], $caminho);

                        return $caminho;
//
        /*}elseif(preg_match("/_decla_autoria/",$arquivo)){

            $caminho = 'uploads/declaracao_de_autoria/' . $arquivo;

            move_uploaded_file($_FILES['decla_autoria']['tmp_name'], $caminho);

                        return $caminho ;
                        */

        }elseif(preg_match("/_descricao_da_proposta/",$arquivo)){
//
            $caminho = 'uploads/descricao_da_proposta/' . $arquivo;

            move_uploaded_file($_FILES['desc_prop']['tmp_name'], $caminho);

    
                        return $caminho;

        /* }elseif(preg_match("/_termo_premi/",$arquivo)){

            $caminho = 'uploads/termo_de_premiacao/' . $arquivo;

            move_uploaded_file($_FILES['termo_premi']['tmp_name'], $caminho);

                        return $caminho; */

        }elseif(preg_match("/_documento_identidade/",$arquivo)){

            $caminho = 'uploads/documento_identidade/' . $arquivo;

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