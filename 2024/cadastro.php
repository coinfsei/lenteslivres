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
    $telefone_2 = $_POST["telefone_2"];

    //coleta e validação de arquivos
    if ($_FILES['foto'] && $_FILES['video'] && $_FILES['decla_autoria'] && $_FILES['identi_candi'] && $_FILES['termo_premi']){
 
      $nome_compro = $_FILES['foto']['name'];
      $nome_video = $_FILES['video']['name'];
      $nome_decla_autoria = $_FILES['decla_autoria']['name'];
      $nome_identi_candi = $_FILES['identi_candi']['name'];
      $nome_termo_premi = $_FILES['termo_premi']['name'];

      //extensoes permitidas

      $extencao_foto =['jpeg','jpg','png','pdf'];
      $extencao_video =['mp4'];
      $extencao_arquivo =['pdf'];

      $cole_extencao_compro= strtolower(pathinfo($nome_compro, PATHINFO_EXTENSION));
      $cole_extencao_video= strtolower(pathinfo($nome_video, PATHINFO_EXTENSION));
      $cole_extencao_decla= strtolower(pathinfo($nome_decla_autoria, PATHINFO_EXTENSION));
      $cole_extencao_identi= strtolower(pathinfo($nome_identi_candi, PATHINFO_EXTENSION));
      $cole_extencao_termo= strtolower(pathinfo($nome_termo_premi, PATHINFO_EXTENSION));

      //verifica se os uploads possuem as extensões permitidas

      if(!in_array($cole_extencao_compro,$extencao_foto)){

         header("location: inscricao.php?cadastro=falha");
          exit();
         
      }

      if(!in_array($cole_extencao_video,$extencao_video)){

         header("location: inscricao.php?cadastro=falha");
          exit();
         
      }

      if(!in_array($cole_extencao_decla,$extencao_arquivo)){

         header("location: inscricao.php?cadastro=falha");
          exit();
         
      }

      if(!in_array($cole_extencao_identi,$extencao_arquivo)){

         header("location: inscricao.php?cadastro=falha");
          exit();
         
      }

      if(!in_array($cole_extencao_termo,$extencao_arquivo)){

         header("location: inscricao.php?cadastro=falha");
          exit();
         
      }
   
      $novovideo = "id_".$id_inscrito."_Nome_".$nome."_video".'.'. pathinfo($nome_video, PATHINFO_EXTENSION);
      $novocompro ="id_".$id_inscrito."_Nome_".$nome."_compro_residencia" .'.'. pathinfo($nome_compro, PATHINFO_EXTENSION);
      $novodecla = "id_".$id_inscrito."_Nome_".$nome."_decla_autoria" .'.'. pathinfo($nome_decla_autoria, PATHINFO_EXTENSION);
      $novoidenti= "id_".$id_inscrito."_Nome_".$nome."_identi_candi" .'.'. pathinfo($nome_identi_candi, PATHINFO_EXTENSION);
      $novotermo = "id_".$id_inscrito."_Nome_".$nome."_termo_premi" .'.'. pathinfo($nome_termo_premi, PATHINFO_EXTENSION);


  
      $caminho_video = 'uploads/video/' . $novovideo;
      $caminho_compro = 'uploads/comprovante_residencia/' . $novocompro;
      $caminho_decla = 'uploads/declaracao_de_autotoria/' . $novodecla;
      $caminho_identi = 'uploads/indentificacao_do_candidato/' . $novoidenti;
      $caminho_termo = 'uploads/termo_de_premiacao/' . $novotermo;
  
      }

//inserir no banco de dados na tabela inscrito

    $sql = "INSERT INTO inscrito (nome, profissao, cpf, rg, org_expedidor, email) VALUES ('{$nome}', '{$profissao}', '{$cpf}', '{$rg}', '{$orgao_expedidor}', '{$email}')";

	$email_valid = "/[a-zA-Z0-9]+\@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+/";

	if (!preg_match($email_valid, $email)) {
		header("location: inscricao.php?cadastro=email_invalido");
		return;
	}

    $res = $conn->query($sql);

    //comando para verificar se foi possivel envia para o banco
    if ($res) {
      // Obter o id da pessoa inserida

      $id_inscrito = $conn->insert_id;

      //inserir no banco de dados na tabela telefone

    $sql = "INSERT INTO telefone (telefone_1, telefone_2, id_inscrito) VALUES ('{$telefone_1}', '{$telefone_2}', '{$id_inscrito}')";

    $res = $conn->query($sql);

       //inserir no banco de dados na tabela dado_bancario

    $sql = "INSERT INTO dado_bancario (agencia, conta_bancaria, tipo_conta, pis_nit, id_inscrito) VALUES ('{$agencia}', '{$conta_bancaria}', '{$tipo_conta}', '{$pis_nit}', '{$id_inscrito}')";

    $res = $conn->query($sql);

     //inserir no banco de dados na tabela endereco

     
     

     $sql = "INSERT INTO endereco (rua, bairro, cidade, cep, uf, id_inscrito) VALUES ('{$rua}', '{$bairro}', '{$cidade}', '{$cep}', '{$uf}', '{$id_inscrito}')";

    $res = $conn->query($sql);

   //altera nome dos arquivos
      $novovideo = "id_".$id_inscrito."_Nome_".$nome."_video".'.'. pathinfo($nome_video, PATHINFO_EXTENSION);
      $novocompro ="id_".$id_inscrito."_Nome_".$nome."_compro_residencia" .'.'. pathinfo($nome_compro, PATHINFO_EXTENSION);
      $novodecla = "id_".$id_inscrito."_Nome_".$nome."_decla_autoria" .'.'. pathinfo($nome_decla_autoria, PATHINFO_EXTENSION);
      $novoidenti= "id_".$id_inscrito."_Nome_".$nome."_identi_candi" .'.'. pathinfo($nome_identi_candi, PATHINFO_EXTENSION);
      $novotermo = "id_".$id_inscrito."_Nome_".$nome."_termo_premi" .'.'. pathinfo($nome_termo_premi, PATHINFO_EXTENSION);

       if(move_uploaded_file($_FILES['foto']['tmp_name'], $caminho_compro) && move_uploaded_file($_FILES['video']['tmp_name'], $caminho_video) && move_uploaded_file($_FILES['decla_autoria']['tmp_name'], $caminho_decla)  && move_uploaded_file($_FILES['identi_candi']['tmp_name'], $caminho_identi) && move_uploaded_file($_FILES['termo_premi']['tmp_name'], $caminho_termo)){

       $sql = "INSERT INTO upload (compro_resi, video_arquivo, decla_autoria_arquivo, identi_candi_arquivo, quali_participes_arquivo, id_inscrito, local_compro, local_video, local_decla_autoria, local_identi_candi, local_quali_participes) VALUES ('{$novocompro}','{$novovideo}','{$novodecla}','{$novoidenti}','{ $novotermo}','{$id_inscrito}', '{$caminho_compro}','{$caminho_video}','{$caminho_decla}','{$caminho_identi}','{$caminho_termo}')";

    $res = $conn->query($sql);

    $conn->close();

    }
    
    header("location: inscricao.php?cadastro=sucesso");
    exit();
  }

   
  
?>