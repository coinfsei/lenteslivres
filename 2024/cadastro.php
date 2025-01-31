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

//inserir no banco de dados na tabela inscrito

    $sql = "INSERT INTO inscrito (nome, profissao, cpf, rg, org_expedidor, email) VALUES ('{$nome}', '{$profissao}', '{$cpf}', '{$rg}', '{$orgao_expedidor}', '{$email}')";

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

    //sistema para alteração de nome dos arquivos

    $caminho_comprovante = 'uploads/comprovante_residencia/';
    $caminho_video = 'uploads/video/';
    $caminho_declaracao = 'uploads/declaracao_de_autotoria/';
    $caminho_indentificacao = 'uploads/indentificacao_do_candidato/';
    $caminho_termo = 'uploads/termo_de_premiacao/';
    

 if ($_FILES['foto'] && $_FILES['video'] && $_FILES['decla_autoria'] && $_FILES['identi_candi'] && $_FILES['termo_premi']){
 
    $nome_compro = $_FILES['foto']['name'];
    $nome_video = $_FILES['video']['name'];
    $nome_decla_autoria = $_FILES['decla_autoria']['name'];
    $nome_identi_candi = $_FILES['identi_candi']['name'];
    $nome_termo_premi = $_FILES['termo_premi']['name'];

    $altera_n_video = "id_".$id_inscrito."_Nome_".$nome."_video";
    $altera_n_compro ="id_".$id_inscrito."_Nome_".$nome."_compro_residencia";
    $altera_n_decla = "id_".$id_inscrito."_Nome_".$nome."_decla_autoria";
    $altera_n_identi = "id_".$id_inscrito."_Nome_".$nome."_identi_candi";
    $altera_n_termo = "id_".$id_inscrito."_Nome_".$nome."_termo_premi";

    $novovideo = $altera_n_video .'.'. pathinfo($nome_video, PATHINFO_EXTENSION);
    $novocompro = $altera_n_compro .'.'. pathinfo($nome_compro, PATHINFO_EXTENSION);
    $novodecla = $altera_n_decla .'.'. pathinfo($nome_decla_autoria, PATHINFO_EXTENSION);
    $novoidenti = $altera_n_identi .'.'. pathinfo($nome_identi_candi, PATHINFO_EXTENSION);
    $novotermo = $altera_n_termo .'.'. pathinfo($nome_termo_premi, PATHINFO_EXTENSION);

    $caminho_video = $caminho_video . $novovideo;
    $caminho_compro = $caminho_comprovante . $novocompro;
    $caminho_decla = $caminho_declaracao . $novodecla;
    $caminho_identi = $caminho_indentificacao . $novoidenti;
    $caminho_termo = $caminho_termo . $novotermo;

    }

       if(move_uploaded_file($_FILES['foto']['tmp_name'], $caminho_compro) && move_uploaded_file($_FILES['video']['tmp_name'], $caminho_video) && move_uploaded_file($_FILES['decla_autoria']['tmp_name'], $caminho_decla)  && move_uploaded_file($_FILES['identi_candi']['tmp_name'], $caminho_identi) && move_uploaded_file($_FILES['termo_premi']['tmp_name'], $caminho_termo)){

       $sql = "INSERT INTO upload (compro_resi, video_arquivo, decla_autoria_arquivo, identi_candi_arquivo, quali_participes_arquivo, id_inscrito, local_compro, local_video, local_decla_autoria, local_identi_candi, local_quali_participes) VALUES ('{$novocompro}','{$novovideo}','{$novodecla}','{$novoidenti}','{ $novotermo}','{$id_inscrito}', '{$caminho_compro}','{$caminho_video}','{$caminho_decla}','{$caminho_identi}','{$caminho_termo}')";

    $res = $conn->query($sql);

    $conn->close();

    }

    header("location: inscricao.php?cadastro=sucesso");
    exit();
  }

   
  
?>