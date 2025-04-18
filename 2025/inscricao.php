<?php include ('./snippets/scripts.html') ?>

<?php

ini_set('display_errors', 'Off');

        switch ($_GET['cadastro']) {

            case "sucesso":

                    echo "<script src='./js/showModal.js'></script>";
                    break; 

			case "nome_invalido":
			
					echo "<script>alert('Inscrição não foi possivel ser realizada! Nome inválido!')</script>";
					break;
					
			case "profissao_invalida":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Profissão inválida!')</script>";
					break;

			case "email_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Email inválido!')</script>";
					break;

			case "cpf_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! CPF inválido!')</script>";
					break;

			case "cpf_registrado":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Esse CPF já esta registrado!')</script>";
					break;

			case "rg_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! RG inválido!')</script>";
					break;
			case "cep_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! CEP inválido!')</script>";
					break;
			case "uf_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! UF inválida!')</script>";
					break;
			case "telefone_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Telefone inválido! Coloque o DDD!')</script>";
					break;
			case "orgao_expedidor_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Órgão expedidor inválido!')</script>";
					break;
			case "agencia_invalida":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Agência inválida!')</script>";
					break;
			case "conta_bancaria_invalida":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Conta bancária inválida!')</script>";
					break;
			case "pis_nit_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! PIS_NIT inválido!')</script>";
					break;
			case "tipo_conta_invalido":

					echo "<script>alert('Inscrição não foi possivel ser realizada! Tipo de conta inválido!')</script>";
					break;
            case "arquivo_invalido":

                    echo "<script>alert('Inscrição não foi possivel ser realizada! Verifique os arquivos enviados!')</script>";
                    break;

			case "unknown":
                
					echo "<script>alert('Inscrição não foi possivel ser realizada! Erro desconhecido!')</script>";
			
        }


?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- Head -->
    <?php include('./snippets/head.html'); ?>
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="70">

    <!-- Barra de Navegação -->
    <?php include('./snippets/navegacao-inscricao.html'); ?>

    <!-- Sessão Home -->
    <?php //include('./snippets/banner.html'); ?>

    <!-- Modal Termo -->
    <?php include('./snippets/modal.html');?>

    <!-- Modal confirmação -->
    <?php include('./snippets/modal-confirmacao.html');?>

    <!--inscricao -->
    <?php include('./snippets/inscricao.html'); ?>

    <!-- Sessão dos Patrocinadores -->
    <?php include('./snippets/patrocinio.html'); ?>

    <!-- Modal de Versões Anteriores -->
    <?php include('./snippets/botao-flutuante.html'); ?>

    <!-- Footer -->
    <?php include('./snippets/rodape.html'); ?>

    <!-- Chamada dos Scripts -->
    
</body>

</html>