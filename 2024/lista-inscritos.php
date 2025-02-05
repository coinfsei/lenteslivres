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
            echo "<table class='table table-dark table-hover'>";
            echo "<tr>";
            echo "<th>ID: {$arquivo['id_inscrito']}</th>";
            echo "<th>Nome: {$arquivo['nome_inscrito']}</th>";
            echo "</td>";
            echo "<tbody>";
            echo "<td>Profissão: {$arquivo['profissao']}</td>";
            echo "<td>CPF: {$arquivo['cpf']}</td>";
            echo "<td>RG: {$arquivo['rg']}</td>";
            echo "<td>Órgão Expedidor: {$arquivo['org_expedidor']}</td>";
            echo "<td>E-mail: {$arquivo['email']}</td>";
            echo "<td>Data inscrição: {$arquivo['data_inscricao']}</td>";
            echo "<td>Telefone 1: {$arquivo['telefone_1']}</td>";
            echo "<td>Telefone 2: {$arquivo['telefone_2']}</td>";
            echo "<td>Rua: {$arquivo['rua']}</td>";
            echo "<td>Bairro: {$arquivo['bairro']}</td>";
            echo "<td>Cidade: {$arquivo['cidade']}</td>";
            echo "<td>CEP: {$arquivo['cep']}</td>";
            echo "<td>UF: {$arquivo['uf']}</td>";
            echo "<td>Agencia: {$arquivo['agencia']}</td>";
            echo "<td>Conta Bancaria: {$arquivo['tipo_conta']}</td>";
            echo "PIS/NIT: {$arquivo['pis_nit']}<br>";
            echo "<td>Titulo da Proposta de intervenção:<br>{$arquivo['Proposta_intervecao']}</td>";
            echo "</tbody>";
            echo "<a href='{$arquivo['local_documento']}' target='_blank'>Documento</a><br>";
            echo "<a href='{$arquivo['local_compro']}' target='_blank'>Comprovante</a><br>";
            echo "<a href='{$arquivo['local_video']}' target='_blank'>Vídeo</a><br>";
            echo "<a href='{$arquivo['local_decla_autoria']}' target='_blank'>Declaração de autotoria e residencia</a><br>";
            echo "<a href='{$arquivo['local_identi_candi']}' target='_blank'>Indentificação do candidato e da proposta</a><br>";
            echo "<a href='{$arquivo['local_quali_participes']}' target='_blank'>Termo de premiacão e cessão de direitos patrimoniais e de imagem</a><br>";
            echo "</table>";
            echo "<hr>";
        }
    } else {
        echo "Nenhum registro encontrado.";
    }

   
    
?>