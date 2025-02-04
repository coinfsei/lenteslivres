<?php 

include('conf.php');
$conn = conexao_banco();

//sistema para listar inscritos

    $sql= "SELECT 
    i.id AS id_inscrito,
    i.nome AS nome_inscrito,
    i.profissao,
    i.cpf,
    i.rg,
    i.org_expedidor,
    i.email,
    i.data_inscricao,
    t.telefone_1,
    t.telefone_2,
    e.rua,
    e.bairro,
    e.cidade,
    e.cep,
    e.uf,
    d.agencia,
    d.conta_bancaria,
    d.tipo_conta,
    d.pis_nit,
    u.compro_resi,
    u.video_arquivo,
    u.decla_autoria_arquivo,
    u.identi_candi_arquivo,
    u.quali_participes_arquivo,
    u.local_compro,
    u.local_documento,
    u.local_video,
    u.local_decla_autoria,
    u.local_identi_candi,
    u.local_quali_participes,
    u.data_envio
FROM 
    inscrito i
LEFT JOIN 
    telefone t ON i.id = t.id_inscrito
LEFT JOIN 
    endereco e ON i.id = e.id_inscrito
LEFT JOIN 
    dado_bancario d ON i.id = d.id_inscrito
LEFT JOIN 
    upload u ON i.id = u.id_inscrito;
";
   
    echo "<h1>Arquivos Enviados</h1>";

    $result = $conn->query($sql);
 
    if ($result->num_rows > 0) {
        // Transformar os resultados em um array
        $dados = $result->fetch_all(MYSQLI_ASSOC);
        foreach ($dados as $arquivo) {
            echo "ID: {$arquivo['id_inscrito']}<br>";
            echo "Nome: {$arquivo['nome_inscrito']}<br>";
            echo "Profissão: {$arquivo['profissao']}<br>";
            echo "CPF: {$arquivo['cpf']}<br>";
            echo "RG: {$arquivo['rg']}<br>";
            echo "Órgão Expedidor: {$arquivo['org_expedidor']}<br>";
            echo "E-mail: {$arquivo['email']}<br>";
            echo "Data inscrição: {$arquivo['data_inscricao']}<br>";
            echo "Telefone 1: {$arquivo['telefone_1']}<br>";
            echo "Telefone 2: {$arquivo['telefone_2']}<br>";
            echo "Rua: {$arquivo['rua']}<br>";
            echo "Bairro: {$arquivo['bairro']}<br>";
            echo "Cidade: {$arquivo['cidade']}<br>";
            echo "CEP: {$arquivo['cep']}<br>";
            echo "UF: {$arquivo['uf']}<br>";
            echo "Agencia: {$arquivo['agencia']}<br>";
            echo "Conta Bancaria: {$arquivo['tipo_conta']}<br>";
            echo "PIS/NIT: {$arquivo['pis_nit']}<br>";
            echo "<a href='{$arquivo['local_documento']}' target='_blank'>Documento</a><br>";
            echo "<a href='{$arquivo['local_compro']}' target='_blank'>Comprovante</a><br>";
            echo "<a href='{$arquivo['local_video']}' target='_blank'>Vídeo</a><br>";
            echo "<a href='{$arquivo['local_decla_autoria']}' target='_blank'>Declaração de autotoria e residencia</a><br>";
            echo "<a href='{$arquivo['local_identi_candi']}' target='_blank'>Indentificação do candidato e da proposta</a><br>";
            echo "<a href='{$arquivo['local_quali_participes']}' target='_blank'>Termo de premiacão e cessão de direitos patrimoniais e de imagem</a><br>";
            echo "<hr>";
        }
    } else {
        echo "Nenhum registro encontrado.";
    }

   
    
?>