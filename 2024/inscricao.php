
<?php 
    if (isset($_GET['cadastro'])) {
		if ($_GET['cadastro'] == 'sucesso') 
			echo "<script>alert('Inscrição realizada com sucesso!')</script>";
		if ($_GET['cadastro'] == 'email_invalido') 
			echo "<script>alert('Email inválido!')</script>";
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

    <!--inscricao -->
    <?php include('./snippets/inscricao.html'); ?>

    <!-- Sessão dos Patrocinadores -->
    <?php include('./snippets/patrocinio.html'); ?>

    <!-- Modal de Versões Anteriores -->
    <?php include('./snippets/botao-flutuante.html'); ?>

    <!-- Footer -->
    <?php include('./snippets/rodape.html'); ?>

    <!-- Chamada dos Scripts -->
    <?php include('./snippets/scripts.html'); ?>
</body>

</html>