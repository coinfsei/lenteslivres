<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

<?php

include('conf_bd.php');

$mostrar_formulario = true; // Controla a exibição do formulário

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Verifica se o usuário e a senha estão corretos
    if (verificar_usr($usuario, $senha)) {
        $mostrar_formulario = false; // Oculta o formulário se os dados estiverem corretos
    } else {
        echo "<div class='alert alert-danger'>Usuário ou senha incorretos.</div>";
    }
}

if ($mostrar_formulario) {
    // Exibe o formulário
    echo "<form action='admin.php' method='post' class='p-3'>";
    echo "<label for='usuario'>Usuário</label>";
    echo "<input type='text' name='usuario' id='usuario' class='form-control mb-2' required>";
    echo "<label for='senha'>Senha</label>";
    echo "<input type='password' name='senha' id='senha' class='form-control mb-2' required>";
    echo "<input type='submit' value='Confirmar' class='btn btn-primary'>";
    echo "</form>";
} else {


    echo "<div class='p-3 mb-2 bg-dark text-white'";
    echo "<h1 class='text-center'>Arquivos Enviados</h1>";
    echo "</div>";
    echo "<div class='container p-3 mb-2 bg-light text-dark'>";
    $conn = conexao_banco();

    $sql = "SELECT * FROM  inscrito ORDER BY id DESC LIMIT 1";

    $result = $conn->query($sql);

    $dados = $result->fetch_assoc();

    echo "O total de inscrições ate o momento são de ".$dados['id'];
    //sistema para listar inscritos
    
    // Consulta para listar os inscritos com os dados relacionados
    $sql = "SELECT
        i.id AS id_inscrito,
        i.nome AS nome_inscrito,
        i.profissao,
        i.cpf,
        i.rg,
        i.org_expedidor,
        i.email,
        i.data_inscricao,
        i.proposta_intervecao,
        t.telefone_1,
        t.telefone_2,
        e.rua,
        e.bairro,
        e.municipio,
        e.cep,
        e.uf,
        u.compro_resi,
        u.video_arquivo,
        u.descricao_arquivo,
        u.documento_arquivo,
        u.local_compro,
        u.local_documento,
        u.local_video,
        u.local_descricao
    FROM
        inscrito i
    LEFT JOIN
        telefone t ON i.id = t.id_inscrito
    LEFT JOIN
        endereco e ON i.id = e.id_inscrito
    LEFT JOIN
        upload u ON i.id = u.id_inscrito";


$result = $conn->query($sql);

if ($result->num_rows > 0) {

while ($row = $result->fetch_assoc()) {
echo "<br>";
echo "<div class='container'>";

// Tabela de Dados Básicos
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<tr>";
echo "<th>ID: {$row['id_inscrito']} - Dados Básicos</th>";
echo "</tr>";
echo "</table>";


// Tabela de Informações Pessoais
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Nome</th>";
echo "<th>Profissão</th>";
echo "<th>E-mail</th>";
echo "<th>CPF</th>";
echo "<th>RG</th>";
echo "<th>Órgão Expedidor</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['nome_inscrito']}</td>";
echo "<td>{$row['profissao']}</td>";
echo "<td>{$row['email']}</td>";
echo "<td>{$row['cpf']}</td>";
echo "<td>{$row['rg']}</td>";
echo "<td>{$row['org_expedidor']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Endereço
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Rua</th>";
echo "<th>Bairro</th>";
echo "<th>municipio</th>";
echo "<th>CEP</th>";
echo "<th>UF</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['rua']}</td>";
echo "<td>{$row['bairro']}</td>";
echo "<td>{$row['cidade']}</td>";
echo "<td>{$row['cep']}</td>";
echo "<td>{$row['uf']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Contato
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Telefone 1</th>";
echo "<th>Telefone 2</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['telefone_1']}</td>";
echo "<td>{$row['telefone_2']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Documentos
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Foto do Documento de Identificação</th>";
echo "<th>Comprovante de Residência</th>";
echo "<th>Vídeo</th>";
echo "<th>Descrição da Proposta</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td><a href='{$row['local_documento']}' target='_blank'>Documento</a></td>";
echo "<td><a href='{$row['local_compro']}' target='_blank'>Comprovante</a></td>";
echo "<td><a href='{$row['local_video']}' target='_blank'>Vídeo</a></td>";
echo "<td><a href='{$row['local_descricao']}' target='_blank'>Proposta</a></td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Proposta de Intervenção
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Título da Proposta de Intervenção</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['proposta_intervecao']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

echo "</div>";
echo "<br><hr>";

}
} else {
    echo "Nenhum inscrito encontrado."; 
}
}

$conn->close();
    

?>
















<!-- <div class="p-3 mb-2 bg-dark text-white">
    <h1 class="text-center">Arquivos Enviados</h1>
</div>
<div class="container p-3 mb-2 bg-light text-dark">
    <?php
    
/*     include('conf.php');
    $conn = conexao_banco();;

    $sql = "SELECT * FROM  inscrito ORDER BY id DESC LIMIT 1";

    $result = $conn->query($sql);

    $dados = $result->fetch_assoc();

    echo "O total de inscrições ate o momento são de ".$dados['id'];
    //sistema para listar inscritos
    
    // Consulta para listar os inscritos com os dados relacionados
    $sql = "SELECT
        i.id AS id_inscrito,
        i.nome AS nome_inscrito,
        i.profissao,
        i.cpf,
        i.rg,
        i.org_expedidor,
        i.email,
        i.data_inscricao,
        i.proposta_intervecao,
        t.telefone_1,
        t.telefone_2,
        e.rua,
        e.bairro,
        e.municipio,
        e.cep,
        e.uf,
        u.compro_resi,
        u.video_arquivo,
        u.descricao_arquivo,
        u.documento_arquivo,
        u.local_compro,
        u.local_documento,
        u.local_video,
        u.local_descricao
    FROM
        inscrito i
    LEFT JOIN
        telefone t ON i.id = t.id_inscrito
    LEFT JOIN
        endereco e ON i.id = e.id_inscrito
    LEFT JOIN
        upload u ON i.id = u.id_inscrito";


$result = $conn->query($sql);

if ($result->num_rows > 0) {

while ($row = $result->fetch_assoc()) {
echo "<br>";
echo "<div class='container'>";

// Tabela de Dados Básicos
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<tr>";
echo "<th>ID: {$row['id_inscrito']} - Dados Básicos</th>";
echo "</tr>";
echo "</table>";


// Tabela de Informações Pessoais
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Nome</th>";
echo "<th>Profissão</th>";
echo "<th>E-mail</th>";
echo "<th>CPF</th>";
echo "<th>RG</th>";
echo "<th>Órgão Expedidor</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['nome_inscrito']}</td>";
echo "<td>{$row['profissao']}</td>";
echo "<td>{$row['email']}</td>";
echo "<td>{$row['cpf']}</td>";
echo "<td>{$row['rg']}</td>";
echo "<td>{$row['org_expedidor']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Endereço
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Rua</th>";
echo "<th>Bairro</th>";
echo "<th>municipio</th>";
echo "<th>CEP</th>";
echo "<th>UF</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['rua']}</td>";
echo "<td>{$row['bairro']}</td>";
echo "<td>{$row['cidade']}</td>";
echo "<td>{$row['cep']}</td>";
echo "<td>{$row['uf']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Contato
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Telefone 1</th>";
echo "<th>Telefone 2</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['telefone_1']}</td>";
echo "<td>{$row['telefone_2']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Documentos
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Foto do Documento de Identificação</th>";
echo "<th>Comprovante de Residência</th>";
echo "<th>Vídeo</th>";
echo "<th>Descrição da Proposta</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td><a href='{$row['local_documento']}' target='_blank'>Documento</a></td>";
echo "<td><a href='{$row['local_compro']}' target='_blank'>Comprovante</a></td>";
echo "<td><a href='{$row['local_video']}' target='_blank'>Vídeo</a></td>";
echo "<td><a href='{$row['local_descricao']}' target='_blank'>Proposta</a></td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

// Tabela de Proposta de Intervenção
echo "<table class='table table-hover table-striped table-bordered'>";
echo "<thead>";
echo "<tr>";
echo "<th>Título da Proposta de Intervenção</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
echo "<tr>";
echo "<td>{$row['proposta_intervecao']}</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";

echo "</div>";
echo "<br><hr>";

}
} else {
    echo "Nenhum inscrito encontrado."; 
}

$conn->close(); --> */
    
    











       /* $result = $conn->query($sql);
    
        if ($result->num_rows > 0) {
            $dados = $result->fetch_all(MYSQLI_ASSOC);
            var_dump($dados); // Depuração
            foreach ($dados as $arquivo) {
                
                //campos da tabela
                echo "<br>";
                echo "<div class='container'>";
                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>ID: {$arquivo['id_inscrito']} Dados Basicos</th>";
                echo "</tr>";
                echo "</table>";
                
                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Nome</th>";
                echo "<th>Profissão</th>";
                echo "<th>E-mail</th>";
                echo "<th>CPF</th>";
                echo "<th>RG</th>";
                echo "<th>Órgão Expedidor</th>";
                echo "</tr>";
                echo "<td>{$arquivo['nome_inscrito']}</th>";
                echo "<td>{$arquivo['profissao']}</td>";
                echo "<td>{$arquivo['email']}</td>";
                echo "<td>{$arquivo['cpf']}</td>";
                echo "<td>{$arquivo['rg']}</td>";
                echo "<td>{$arquivo['org_expedidor']}</td>";
                echo "</tr>";
                echo "</table>";
               
                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Endereço</th>";
                echo "</tr>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Rua</th>";
                echo "<th>Bairro</th>";
                echo "<th>Cidade</th>";
                echo "<th>CEP</th>";
                echo "<th>UF</th>";
                echo "</tr>";
                echo "<td>{$arquivo['rua']}</td>";
                echo "<td>{$arquivo['bairro']}</th>";
                echo "<td>{$arquivo['cidade']}</td>";
                echo "<td>{$arquivo['cep']}</td>";
                echo "<td>{$arquivo['uf']}</td>";
                echo "</tr>";
                echo "</table>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Numero de contato</th>";
                echo "</tr>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Telefone 1</th>";
                echo "<th>Telefone 2</th>";
                echo "</tr>";
                echo "<td>{$arquivo['telefone_1']}</td>";
                echo "<td>{$arquivo['telefone_2']}</th>";
                echo "</tr>";
                echo "</table>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Dados Bancarios</th>";
                echo "</tr>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Agencia</th>";
                echo "<th>Conta Bancaria</th>";
                echo "<th>Tipo da conta</th>";
                echo "<th>PIS/NIT</th>";
                echo "</tr>";
                echo "<td>{$arquivo['agencia']}</td>";
                echo "<td>{$arquivo['conta_bancaria']}</th>";
                echo "<td>{$arquivo['tipo_conta']}</td>";
                echo "<td>{$arquivo['pis_nit']}</th>";
                echo "</tr>";
                echo "</table>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Documentos</th>";
                echo "</tr>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Foto do Documento de indentificação</th>";
                echo "<th>Comprovante de residencia</th>";
                echo "<th>Video</th>";
                echo "<th>Declaração de autoria e residencia</th>";
                echo "<th>Indentificação do candidato e da proposta</th>";
                echo "<th>Termo de premiacão</th>";
                echo "</tr>";
                echo "<td><a href='{$arquivo['local_documento']}' target='_blank'>Documento</a></td>";
                echo "<td><a href='{$arquivo['local_compro']}' target='_blank'>Comprovante</a></th>";
                echo "<td><a href='{$arquivo['local_video']}' target='_blank'>Vídeo</a></td>";
                echo "<td><a href='{$arquivo['local_decla_autoria']}' target='_blank'>Declaração de autotoria e residencia</a></td>";
                echo "<td><a href='{$arquivo['local_identi_candi']}' target='_blank'>Indentificação do candidato e da proposta</a></td>";
                echo "<td><a href='{$arquivo['local_quali_participes']}' target='_blank'>Termo de premiacão e cessão de direitos patrimoniais e de imagem</a></td>";
                echo "</tr>";
                echo "</table>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Titulo da Proposta de intervenção</th>";
                echo "</tr>";

                echo "<table class='table table-hover table-striped table-bordered'>";
                echo "<tr>";
                echo "<th>Conteudo</th>";
                echo "</tr>";
                echo "<td>{$arquivo['proposta_intervecao']}</td>";
                echo "</tr>";
                echo "</table>";
                echo "</div>";
                echo "<br> <hr>";
            }
        } else {
            echo "Nenhum registro encontrado.";
        }  */

    ?>
</div>
