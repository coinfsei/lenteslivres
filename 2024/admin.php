<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
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
        i.proposta_intervecao,
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
        }

    ?>
