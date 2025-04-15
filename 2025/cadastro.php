<?php 
include('conf.php');
include('conf_bd.php');
$conn = conexao_banco();

//Coleta de dados sobre o inscrito
    $nome = $_POST["nome"];
    $profissao = $_POST["profissao"];
    $email = $_POST["email"];
    $cpf = $_POST["cpf"];
    $rg = $_POST["rg"];
    $orgao_expedidor = $_POST["orgao_expedidor"];
    $telefone_1 = $_POST["telefone_1"];
    $telefone_2 = $_POST["telefone_2"];
    $rua = $_POST["rua"];
    $bairro = $_POST["bairro"];
    $municipio = $_POST["municipio"];
    $cep = $_POST["cep"];
    $uf = "BA";
    $proposta = $_POST["proposta"];
    $nome_compro = $_FILES['foto']['name'];
    $nome_video = $_FILES['video']['name'];
    $nome_identidade = $_FILES['identidade']['name'];
 /* $nome_decla_autoria = $_FILES['decla_autoria']['name'];*/
    $nome_desc_prop = $_FILES['desc_prop']['name'];
    /*$nome_termo_premi = $_FILES['termo_premi']['name'];*/

 //verifica se os uploads possuem as extensões permitidas 

	$name_valid = "/(^[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+([a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]|((\ |\. |º|ª)[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+)*)\.?$)/";
	if (!preg_match($name_valid, $nome)) {
		header("location: inscricao.php?cadastro=nome_invalido");
		return;
	}
	
	if (!preg_match($name_valid, $profissao)) {
		header("location: inscricao.php?cadastro=profissao_invalida");
		return;
	}
	
	$email = strtolower($email);
	$email_valid = "/(^[a-zA-Z0-9\.\_\-]+@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$)/";
	if (!preg_match($email_valid, $email)) {
		header("location: inscricao.php?cadastro=email_invalido");
		return;
	}
	
	$cpf = preg_replace( '/[\.|\-|\ ]/', '', $cpf);
	
	$cpf_valid = "/(^[0-9]{11}$)|(^([0-9]{3}\.){2}[0-9]{3}\-[0-9]{2}$)/";
	
	if (!preg_match($cpf_valid, $cpf)) {
		header("location: inscricao.php?cadastro=cpf_invalido");
		return;
	} else if (preg_match('/(\d)\1{10}/', $cpf)) {
		header("location: inscricao.php?cadastro=cpf_invalido");
        return;
	} else {
		for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $c = 0; $c < $t; $c++) {
            $d += $cpf[$c] * (($t + 1) - $c);
        }
        $d = ((10 * $d) % 11) % 10;
        if ($cpf[$c] != $d) {
            header("location: inscricao.php?cadastro=cpf_invalido");
			return;
        }
        //Verifica se o cpf já foi cadastrado

        $sql = "SELECT * FROM inscrito WHERE cpf = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $cpf);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            header("location: inscricao.php?cadastro=cpf_registrado");
            return;
            
        }

	}
	} 
	
	$rg_valid = "/(^[0-9]{4,12}$)|(^([0-9]{1,3}\.){2}([0-9]{1,3}\-)([0-9]{1,3})$)/";
	
	if (!preg_match($rg_valid, $rg)) {
		header("location: inscricao.php?cadastro=rg_invalido");
		return;
	}
	
	$cep = preg_replace( '/[\.|\-]/', '', $cep);
	
	$cep_valid = "/^(4[0-8]([0-9]){6})|(4[0-8]([0-9]){3}\-[0-9]{3})$/";
	
	if (!preg_match($cep_valid, $cep)) {
		header("location: inscricao.php?cadastro=cep_invalido");
		return;
	}
	
	$uf_valid = "/^[a-zA-Z]{2}$/";
	
	if (!preg_match($uf_valid, $uf)) {
		header("location: inscricao.php?cadastro=uf_invalido");
		return;
	}

    $telefone_valid = "/^([0-9]{10,12}|[0-9]{4,8}\-[0-9]{4}|\+[0-9]{12,15}|\+[0-9]{8,12}\-[0-9]{4}|\([0-9]{2,3}\)[0-9]{8-9}|\([0-9]{2,3}\)[0-9]{4-5}\-[0-9]{4}|\+[0-9]{2,3}\([0-9]{2,3}\)[0-9]{4-5}[0-9]{4})$/";
 
    if (!preg_match($telefone_valid, $telefone_1)) {
        header("location: inscricao.php?cadastro=telefone_invalido");
        return;
    }
    
    $telefone2_valid = "((^([0-9]{10,12}|[0-9]{4,8}\-[0-9]{4}|\+[0-9]{12,15}|\+[0-9]{8,12}\-[0-9]{4}|\([0-9]{2,3}\)[0-9]{8-9}|\([0-9]{2,3}\)[0-9]{4-5}\-[0-9]{4}|\+[0-9]{2,3}\([0-9]{2,3}\)[0-9]{4-5}[0-9]{4}|$))|^$)";
    
    if (!preg_match($telefone2_valid, $telefone_2)) {
        header("location: inscricao.php?cadastro=telefone_invalido");
        return;
    }
   
	
	$orgao_expedidor_valid = "/^(?:[a-zA-Z0-9\/]|[a-zA-Z0-9\/](?:\-|\ ))+$/";
	
	if (!preg_match($orgao_expedidor_valid, $orgao_expedidor) || strlen($orgao_expedidor) > 7) {
        header("location: inscricao.php?cadastro=orgao_expedidor_invalido");
        return;
    }


	//coleta e validação de arquivos

      validar_foto($nome_compro);
      validar_foto($nome_identidade);
      validar_video($nome_video);
      validar_arquivo($nome_desc_prop);
      //validar_arquivo($nome_termo_premi);


//inserir no banco de dados na tabela inscrito

$sql = "INSERT INTO inscrito (nome, profissao, cpf, rg, org_expedidor, email, proposta_intervecao) VALUES ('{$nome}', '{$profissao}', '{$cpf}', '{$rg}', '{$orgao_expedidor}', '{$email}', '{$proposta}')";

$res = $conn->query($sql);

if($res){
$id_inscrito = $conn->insert_id;
}   

//inserir no banco de dados na tabela telefone

$sql = "INSERT INTO telefone (telefone_1, telefone_2, id_inscrito) VALUES ('{$telefone_1}', '{$telefone_2}', '{$id_inscrito}')";

$res = $conn->query($sql);

//inserir no banco de dados na tabela dado_bancario

/*$sql = "INSERT INTO dado_bancario (agencia, conta_bancaria, tipo_conta, pis_nit, id_inscrito) VALUES ('{$agencia}', '{$conta_bancaria}', '{$tipo_conta}', '{$pis_nit}', '{$id_inscrito}')";

$res = $conn->query($sql);*/

//inserir no banco de dados na tabela endereco

$sql = "INSERT INTO endereco (rua, bairro, municipio, cep, uf, id_inscrito) VALUES ('{$rua}', '{$bairro}', '{$municipio}', '{$cep}', '{$uf}', '{$id_inscrito}')";

$res = $conn->query($sql);

    //altera nome dos arquivos é tenta movimenta- para as pastas de destino
    $novovideo = "id_".$id_inscrito."_Nome_".$nome."_video".'.'. pathinfo($nome_video, PATHINFO_EXTENSION);
    $novocompro ="id_".$id_inscrito."_Nome_".$nome."_compro_residencia" .'.'. pathinfo($nome_compro, PATHINFO_EXTENSION);
    /*$novodecla = "id_".$id_inscrito."_Nome_".$nome."_decla_autoria" .'.'. pathinfo($nome_decla_autoria, PATHINFO_EXTENSION);*/
    $novodesc_prop= "id_".$id_inscrito."_Nome_".$nome."_desc_prop" .'.'. pathinfo($nome_desc_prop, PATHINFO_EXTENSION);
    /*$novotermo = "id_".$id_inscrito."_Nome_".$nome."_termo_premi" .'.'. pathinfo($nome_termo_premi, PATHINFO_EXTENSION);*/
    $novoidentidade = "id_".$id_inscrito."_Nome_".$nome."_documen_identidade" .'.'. pathinfo($nome_identidade,PATHINFO_EXTENSION);

    $caminho_compro = move_arquivo($novocompro);
    $caminho_video = move_arquivo($novovideo);
    /*$caminho_decla = move_arquivo($novodecla);*/
    $caminho_novodesc_prop = move_arquivo($novodesc_prop);
    //$caminho_termo = move_arquivo($novotermo);
    $caminho_identidade = move_arquivo($novoidentidade);


        $sql = "INSERT INTO upload (compro_resi, video_arquivo, descricao_arquivo, id_inscrito, local_compro, local_video, local_descricao, documento_arquivo, local_documento) VALUES ('{$novocompro}','{$novovideo}','{$novodesc_prop}','{$id_inscrito}', '{$caminho_compro}','{$caminho_video}','{$novodesc_prop}','{$novoidentidade}','{$caminho_identidade}')";

        $res = $conn->query($sql);
  
          $conn->close();
          header("location: inscricao.php?cadastro=sucesso");
          exit();


        

      
  
?>
