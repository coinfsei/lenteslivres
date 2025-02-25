<?php 
include('conf.php');
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
    $cidade = $_POST["cidade"];
    $cep = $_POST["cep"];
    $uf = $_POST["uf"];
    $agencia = $_POST["agencia"];
    $conta_bancaria = $_POST["conta_bancaria"];
    $tipo_conta = $_POST["tipo_conta"];
    $pis_nit = $_POST["pis_nit"];
    $proposta = $_POST["proposta"];
    $nome_compro = $_FILES['foto']['name'];
    $nome_video = $_FILES['video']['name'];
    $nome_identidade = $_FILES['identidade']['name'];
 /* $nome_decla_autoria = $_FILES['decla_autoria']['name'];*/
    $nome_identi_candi = $_FILES['identi_candi']['name'];
    $nome_termo_premi = $_FILES['termo_premi']['name'];

 //verifica se os uploads possuem as extensões permitidas 


	
    
	$name_valid = "/(^[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+([a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]|(\ [a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+)*)$)/";
	if (!preg_match($name_valid, $nome)) {
		header("location: inscricao.php?cadastro=nome_invalido");
		return;
	}
	
	if (!preg_match($name_valid, $profissao)) {
		header("location: inscricao.php?cadastro=profissao_invalida");
		return;
	}
	
	$email = strtolower($email);
	$email_valid = "/(^[a-zA-Z0-9]+\@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$))/";
	if (!preg_match($email_valid, $email)) {
		header("location: inscricao.php?cadastro=email_invalido");
		return;
	}
	
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
        
	}
	} 
	
	$rg = preg_replace( '/[\.|\-]/', '', $rg);
	
	$rg_valid = "/(^[0-9]{6,14}$)|(^([0-9]|[0-9][0-9\-\.]){6,14}$)/";
	
	if (!preg_match($rg_valid, $rg)) {
		header("location: inscricao.php?cadastro=rg_invalido");
		return;
	}
	
	$cep = preg_replace( '/[\.|\-]/', '', $cep);
	
	$cep_valid = "/^[0-9]{8}$/";
	
	if (!preg_match($cep_valid, $cep)) {
		header("location: inscricao.php?cadastro=cep_invalido");
		return;
	}
	
	$telefone_1 = preg_replace( '/[\(|\)|\-|]/', '', $telefone_1);

    $telefone_valid = "/(^[0-9]{10,12}|^[0-9]{4,8}\-[0-9]{4}|^\+[0-9]{12,14}|^\+[0-9]{8,10)\-[0-9]{4}$)/";

    if (!preg_match($telefone_valid, $telefone_1)) {
        header("location: inscricao.php?cadastro=telefone_invalido");
        return;
    }

if($telefone_2 == ""){

    $telefone_2 = "Não informado";

}
$telefone_valid = "/(^[0-9]{10,12}|^[0-9]{4,8}\-[0-9]{4}|^\+[0-9]{12,14}|^\+[0-9]{8,10)\-[0-9]{4}$|^$)/";

    $telefone_2 = preg_replace( '/[\(|\)|\-|]/', '', $telefone_2);
      if (!preg_match($telefone_valid, $telefone_2)) {
          header("location: inscricao.php?cadastro=telefone_invalido");
          return;
      }
	
	//coleta e validação de arquivos

      validar_foto($nome_compro);
      validar_foto($nome_identidade);
      validar_video($nome_video);
      validar_arquivo($nome_identi_candi);
      validar_arquivo($nome_termo_premi);


//inserir no banco de dados na tabela inscrito

$sql = $conn->prepare("INSERT INTO inscrito (nome, profissao, cpf, rg, org_expedidor, email, proposta_intervecao) VALUES ('{$nome}', '{$profissao}', '{$cpf}', '{$rg}', '{$orgao_expedidor}', '{$email}', '{$proposta}')");
$sql->bind_param("is", $nome, $profissao, $cpf, $rg, $org_expedidor, $email, $proposta_intervecao);
$res = $conn->execute();

if($res){
$id_inscrito = $conn->insert_id;
}  

//inserir no banco de dados na tabela telefone

$sql = $conn->prepare("INSERT INTO telefone (telefone_1, telefone_2, id_inscrito) VALUES ('{$telefone_1}', '{$telefone_2}', '{$id_inscrito}')");
$sql->bind_param("is", $telefone_1, $telefone_2, $id_inscrito);

$sql->execute();

//inserir no banco de dados na tabela dado_bancario

$sql = "INSERT INTO dado_bancario (agencia, conta_bancaria, tipo_conta, pis_nit, id_inscrito) VALUES ('{$agencia}', '{$conta_bancaria}', '{$tipo_conta}', '{$pis_nit}', '{$id_inscrito}')";

$res = $conn->query($sql);

//inserir no banco de dados na tabela endereco

$sql = "INSERT INTO endereco (rua, bairro, cidade, cep, uf, id_inscrito) VALUES ('{$rua}', '{$bairro}', '{$cidade}', '{$cep}', '{$uf}', '{$id_inscrito}')";

$res = $conn->query($sql);

    //altera nome dos arquivos é tenta movimenta- para as pastas de destino
    $novovideo = "id_".$id_inscrito."_Nome_".$nome."_video".'.'. pathinfo($nome_video, PATHINFO_EXTENSION);
    $novocompro ="id_".$id_inscrito."_Nome_".$nome."_compro_residencia" .'.'. pathinfo($nome_compro, PATHINFO_EXTENSION);
    /*$novodecla = "id_".$id_inscrito."_Nome_".$nome."_decla_autoria" .'.'. pathinfo($nome_decla_autoria, PATHINFO_EXTENSION);*/
    $novoidenti= "id_".$id_inscrito."_Nome_".$nome."_identi_candi" .'.'. pathinfo($nome_identi_candi, PATHINFO_EXTENSION);
    $novotermo = "id_".$id_inscrito."_Nome_".$nome."_termo_premi" .'.'. pathinfo($nome_termo_premi, PATHINFO_EXTENSION);
    $novoidentidade = "id_".$id_inscrito."_Nome_".$nome."_documen_identidade" .'.'. pathinfo($nome_identidade,PATHINFO_EXTENSION);

    $caminho_compro = move_arquivo($novocompro);
    $caminho_video = move_arquivo($novovideo);
    /*$caminho_decla = move_arquivo($novodecla);*/
    $caminho_identi = move_arquivo($novoidenti);
    $caminho_termo = move_arquivo($novotermo);
    $caminho_identidade = move_arquivo($novoidentidade);


        $sql = "INSERT INTO upload (compro_resi, video_arquivo, identi_candi_arquivo, quali_participes_arquivo, id_inscrito, local_compro, local_video, local_identi_candi, local_quali_participes, documento_arquivo, local_documento) VALUES ('{$novocompro}','{$novovideo}','{$novoidenti}','{ $novotermo}','{$id_inscrito}', '{$caminho_compro}','{$caminho_video}','{$caminho_identi}','{$caminho_termo}','{$novoidentidade}','{$caminho_identidade}')";

        $res = $conn->query($sql);
  
          $conn->close();
          header("location: inscricao.php?cadastro=sucesso");
          exit();


        

      
  
?>