$(document).ready(function () {

	var nome = document.getElementById("nome").value
	var profissao = document.getElementById("profissao").value
	var email = document.getElementById("email").value
	var cpf = document.getElementById("cpf").value
	var rg = document.getElementById("rg").value
	var orgao_expedidor = document.getElementById("orgao_expedidor").value
	var telefone_1 = document.getElementById("telefone_1").value
	var rua = document.getElementById("rua").value
	var bairro = document.getElementById("bairro").value
	var municipio = document.getElementById("municipio").value
	var cep = document.getElementById("cep").value
	var uf = document.getElementById("uf").value
	var orgao_expedidor = document.getElementById("orgao_expedidor").value
	var proposta = document.getElementById("proposta").value
	var foto = document.getElementById("foto").value
	var video = document.getElementById("video").value
	var identidade = document.getElementById("identidade").value
	var desc_prop = document.getElementById("desc_prop").value
	//var termo_premi = document.getElementById("termo_premi").value

	var nome_valid = /(^[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+([a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]|(\ [a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+)*)$)/g;
	var email_valid = /(^[a-zA-Z0-9]+\@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$)/g;
	var cpf_valid = /(^[0-9]{11}$)|(^([0-9]{3}\.){2}[0-9]{3}\-[0-9]{2}$)/g;
	var rg_valid = /(^[0-9]{6,14}$)|(^([0-9]|[0-9][0-9\-\.]){6,14}$)/g;
	var cep_valid = /^(4[0-8]([0-9]){6})|(4[0-8]([0-9]){3}\-[0-9]{3})$/g;
	var uf_valid = /^[a-zA-Z]{2}$/g;
	var telefone_valid = /^([0-9]{10,12}|[0-9]{4,8}\-[0-9]{4}|\+[0-9]{12,14}|\+[0-9]{8,10}\-[0-9]{4})$/g;
	var telefone2_valid = /(^([0-9]{10,12}|[0-9]{4,8}\-[0-9]{4}|\+[0-9]{12,14}|\+[0-9]{8,10}\-[0-9]{4})$|^$)/g;
	var orgao_expedidor_valid = /(^(([a-zA-Z0-9]|([a-zA-Z0-9]\-))+$)+)/g;
	var agencia_valid = /^[0-9]{4,5}$/g;
	var conta_bancaria_valid = /^[0-9]{8,20}$/g;
	var pis_nit_valid = /^[0-9]{8,20}$/g;


	const sleep = ms => new Promise(res => setTimeout(res, ms));

	function validarCPF(inputCPF) {
		var soma = 0;
		var resto;

		inputCPF = inputCPF.replaceAll(/(\.|\-)/g, "");
		if (inputCPF == '00000000000') return false;
		for (i = 1; i <= 9; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
		resto = (soma * 10) % 11;

		if ((resto == 10) || (resto == 11)) resto = 0;
		if (resto != parseInt(inputCPF.substring(9, 10))) return false;

		soma = 0;
		for (i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
		resto = (soma * 10) % 11;

		if ((resto == 10) || (resto == 11)) resto = 0;
		if (resto != parseInt(inputCPF.substring(10, 11))) return false;
		return true;
	}

	function invalid_modal(invalid_field) {
		document.getElementById(invalid_field).classList.add("invalido");
		var nodes = document.getElementById(invalid_field).parentNode.children;
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].classList.add("invalido");
			document.getElementById(invalid_field).classList.remove("invalido");
		}
	}

	invalid = true;

	function verificapreenchimento() {

		var nome = document.getElementById("nome").value
		var profissao = document.getElementById("profissao").value
		var email = document.getElementById("email").value
		var cpf = document.getElementById("cpf").value
		var rg = document.getElementById("rg").value
		var orgao_expedidor = document.getElementById("orgao_expedidor").value
		var telefone_1 = document.getElementById("telefone_1").value
		var telefone_2 = document.getElementById("telefone_2").value
		var rua = document.getElementById("rua").value
		var bairro = document.getElementById("bairro").value
		var municipio = document.getElementById("municipio").value
		var cep = document.getElementById("cep").value
		var uf = document.getElementById("uf").value
		var orgao_expedidor = document.getElementById("orgao_expedidor").value
		var proposta = document.getElementById("proposta").value
		var foto = document.getElementById("foto").value
		var video = document.getElementById("video").value
		var identidade = document.getElementById("identidade").value
		var desc_prop = document.getElementById("desc_prop").value
		//var termo_premi = document.getElementById("termo_premi").value

		// Função para validar o arquivo
		function validarArquivo(inputId, avisoid, maxsize, tipocerto) {
			var tiposCertos = tipocerto.split(",")
			var pdfInput = document.getElementById(inputId);
			var aviso = document.getElementById(avisoid);
			var file = pdfInput.files[0];
			var fileSizeMB = file.size / (1024 * 1024);
			if (!tiposCertos.includes(file.type)) {
				pdfInput.value = ''; // Limpa o campo de upload
				aviso.textContent = 'Tipo de arquivo não aceito para esse campo.';
				aviso.style.display = 'block';
				return false;
			}
			if (fileSizeMB > maxsize) {
						pdfInput.value = ''; // Limpa o campo de upload
						aviso.textContent = `Não foi possível enviar o ${file.type.slice(file.type.indexOf("/") + 1)}. O tamanho máximo permitido é ${maxsize}MB.`;
						aviso.style.display = 'block';
						return false;
					} else {
						aviso.style.display = 'none';
						return true;
			}
		
			aviso.style.display = 'none';
			return false;
		}


		Array.from(document.querySelectorAll('.invalido')).forEach(
			(el) => el.classList.remove("invalido"));

		var invalid = false

		if (!nome.match(nome_valid)) {
			invalid_modal("nome");
			invalid = true;
		}

		if (!profissao.match(nome_valid)) {
			invalid_modal("profissao");
			invalid = true;
		}

		if (!email.match(email_valid)) {
			invalid_modal("email");
			invalid = true;
		}

		if (!cpf.match(cpf_valid) || !validarCPF(cpf)) {
			invalid_modal("cpf");
			invalid = true;
		}

		if (!rg.match(rg_valid)) {
			invalid_modal("rg");
			invalid = true;
		}

		if (!cep.match(cep_valid)) {
			invalid_modal("cep");
			invalid = true;
		}

		if (!uf.match(uf_valid)) {
			invalid_modal("uf");
			invalid = true;
		}

		if (!telefone_1.match(telefone_valid)) {
			invalid_modal("telefone_1");
			invalid = true;
		}

		if (!telefone_2.match(telefone2_valid)) {
			invalid_modal("telefone_2");
			invalid = true;
		}

		if (!rua.match(nome_valid)) {
			invalid_modal("rua");
			invalid = true;
		}

		if (!bairro.match(nome_valid)) {
			invalid_modal("bairro");
			invalid = true;
		}

		if (!municipio.match(nome_valid)) {
			invalid_modal("municipio");
			invalid = true;
		}


		if (!orgao_expedidor.match(orgao_expedidor_valid) || orgao_expedidor.length > 7) {
			invalid_modal("orgao_expedidor");
			invalid = true;
		}

		if (!proposta) {
			invalid_modal("proposta");
			invalid = true;
		}
		if (!(foto && validarArquivo('foto', 'aviso-tamanho-foto', 20, 'image/png,image/jpg,image/jpeg,image/webp,application/pdf'))) {
			invalid = true;
			invalid_modal("foto");

		}
		if (!(video && validarArquivo('video', 'aviso-tamanho-video', 400, 'video/mp4,video/mkv,video/webm,video/avi,video/m4a'))) {
			invalid_modal("video");
			invalid = true;
		}
		if (!(identidade && validarArquivo('identidade', 'aviso-tamanho-identidade', 20, 'image/png,image/jpg,image/jpeg,image/webp,application/pdf'))) {
			invalid = true;
			invalid_modal("identidade");
		}
		if (!(desc_prop && validarArquivo('desc_prop', 'aviso-tamanho-desc_prop', 20, 'application/pdf'))) {
			invalid = true;
			invalid_modal("desc_prop");
		}

		if (invalid) return false;
		return true;

	}

	//leitura de arquivo para validação

	// Script para alternar entre Expandir biografia e Recolher biografia 
	/* document.querySelectorAll('.toggle-btn').forEach(function (button) {
		button.addEventListener('click', function () {
			// Verifica se o conteúdo está expandido ou colapsado
			var collapseElement = document.querySelector(this.getAttribute('href'));
			if (collapseElement.classList.contains('show')) {
				this.textContent = 'Expandir biografia';
			} else {
				this.textContent = 'Recolher biografia';
			}
		});
	});/*
        // Configurar o modal para não fechar ao clicar fora ou pressionar ESC
        const modalEletermo = document.getElementById('termo-modal');
        modal_termo = new bootstrap.Modal(modalEletermo, {
            backdrop: 'static',
            keyboard: false
        });
        modal_termo.show(); // Exibe o modal assim que a página carrega

        // Botão Rejeitar
        document.getElementById('rejeitar_declara').addEventListener('click', function() {
            alert('Okay,você sera redirecionado para a pagina inicial');
            window.location.href = 'index.php'; // Redireciona para a página inicial
        });

        // Botão Aceitar
        document.getElementById('aceitar_declara').addEventListener('click', function() {
          modal_termo.hide();
        });
        */

	//ativa botão de enviar formulario
	var checkbox = document.getElementById('checkbox');
	var enviar = document.getElementById('enviar');
	const modalAguarde = document.getElementById('aguardar-modal');
	var modal_aguarde = new bootstrap.Modal(modalAguarde, {
		backdrop: 'static',
		keyboard: false
	});
	const modalEleconfir = document.getElementById('confirmar-modal');
	modal_confirmar = new bootstrap.Modal(modalEleconfir, {
		backdrop: 'static',
		keyboard: false
	});
	const modalAlerta = document.getElementById('alertar-modal');
	var modal_alerta = new bootstrap.Modal(modalAlerta, {



	});

	document.getElementById('fechar_modal_alerta').addEventListener('click', async function () {
		modal_alerta.hide();
		checkbox.checked = false;
	});


	//botão Recusar


	document.getElementById('rejeitar_envio').addEventListener('click', async function () {
		var nome = document.getElementById("nome").value;
		var proposta = document.getElementById("proposta").value;
		var cpf = document.getElementById("cpf").value;
		var rua = document.getElementById("rua").value;
		var bairro = document.getElementById("bairro").value;
		var municipio = document.getElementById("municipio").value;
		var cep = document.getElementById("cep").value;
		var uf = document.getElementById("uf").value;
		// var conteudo = document.getElementById("texto-modal").textContent;
		checkbox.checked = false;
		await alert('É necessário concordar com a declaração de autoria e residencia para prosseguir.');
		modal_confirmar.hide();
		await sleep(800);
		var conteudo_nome = document.getElementById("texto-modal-nome").textContent;
		var conteudo_proposta = document.getElementById("texto-modal-proposta").textContent;
		var conteudo_cpf = document.getElementById("texto-modal-cpf").textContent;
		var conteudo_endereco = document.getElementById("texto-modal-endereco").textContent;
		conteudo_nome = conteudo_nome.replace(`${nome}`, "[placeholder]");
		conteudo_proposta = conteudo_proposta.replace(`${proposta}`, "[placeholder]");
		conteudo_cpf = conteudo_cpf.replace(`${cpf}`, "[placeholder]");
		conteudo_endereco = conteudo_endereco.replace(`${rua}, ${bairro}, ${municipio}, ${uf}, CEP: ${cep},`, "[placeholder]");
		document.getElementById("texto-modal-nome").textContent = conteudo_nome;
		document.getElementById("texto-modal-cpf").textContent = conteudo_cpf;
		document.getElementById("texto-modal-proposta").textContent = conteudo_proposta;
		document.getElementById("texto-modal-endereco").textContent = conteudo_endereco;
	});

	// Botão Aceitar
	document.getElementById('aceitar_envio').addEventListener('click', async function () {
		var nome = document.getElementById("nome").value;
		var proposta = document.getElementById("proposta").value;
		var cpf = document.getElementById("cpf").value;
		var rua = document.getElementById("rua").value;
		var bairro = document.getElementById("bairro").value;
		var municipio = document.getElementById("municipio").value;
		var cep = document.getElementById("cep").value;
		var uf = document.getElementById("uf").value;
		// var conteudo = document.getElementById("texto-modal").textContent;
		modal_confirmar.hide();
		enviar.disabled = false;
		await sleep(800);
		var conteudo_nome = document.getElementById("texto-modal-nome").textContent;
		var conteudo_proposta = document.getElementById("texto-modal-proposta").textContent;
		var conteudo_cpf = document.getElementById("texto-modal-cpf").textContent;
		var conteudo_endereco = document.getElementById("texto-modal-endereco").textContent;
		conteudo_nome = conteudo_nome.replace(`${nome}`, "[placeholder]");
		conteudo_proposta = conteudo_proposta.replace(`${proposta}`, "[placeholder]");
		conteudo_cpf = conteudo_cpf.replace(`${cpf}`, "[placeholder]");
		conteudo_endereco = conteudo_endereco.replace(`${rua}, ${bairro}, ${municipio}, ${uf}, CEP: ${cep},`, "[placeholder]");
		document.getElementById("texto-modal-nome").textContent = conteudo_nome;
		document.getElementById("texto-modal-cpf").textContent = conteudo_cpf;
		document.getElementById("texto-modal-proposta").textContent = conteudo_proposta;
		document.getElementById("texto-modal-endereco").textContent = conteudo_endereco;
	});


	checkbox.addEventListener('change', function () {

		if (checkbox.checked && !verificapreenchimento()) {
			if (document.getElementById("aviso-tamanho-video").style.display == "block" 
			&& document.getElementById("aviso-tamanho-video").textContent.includes("400MB")) {
				document.getElementById("alerta-video").innerHTML = 'Parece que seu vídeo ultrapassa o tamanho máximo permitido de 400MB... Mas não se preocupe. <br/><a href="./tutorial-envio.php" target="_blank">Clique aqui para ver um tutorial de como deixá-lo com um tamanho menor</a>.'
			} else {
				document.getElementById("alerta-video").innerHTML = ''
			}				
			modal_alerta.show();
			checkbox.checked = false;
			return;
		}
		var nome = document.getElementById("nome").value;
		var proposta = document.getElementById("proposta").value;
		var cpf = document.getElementById("cpf").value;
		var rua = document.getElementById("rua").value;
		var bairro = document.getElementById("bairro").value;
		var municipio = document.getElementById("municipio").value;
		var cep = document.getElementById("cep").value;
		var uf = document.getElementById("uf").value;
		// var conteudo = document.getElementById("texto-modal").textContent;

		if (checkbox.checked) {

			var conteudo_nome = document.getElementById("texto-modal-nome").textContent;
			var conteudo_proposta = document.getElementById("texto-modal-proposta").textContent;
			var conteudo_cpf = document.getElementById("texto-modal-cpf").textContent;
			var conteudo_endereco = document.getElementById("texto-modal-endereco").textContent;
			conteudo_nome = conteudo_nome.replace("[placeholder]", `${nome}`);
			conteudo_proposta = conteudo_proposta.replace("[placeholder]", `${proposta}`);
			conteudo_cpf = conteudo_cpf.replace("[placeholder]", `${cpf}`);
			conteudo_endereco = conteudo_endereco.replace("[placeholder]", `Rua: ${rua},\n Bairro: ${bairro},\n Municipio: ${municipio},\n UF: ${uf},\n CEP: ${cep}`);
			document.getElementById("texto-modal-nome").textContent = conteudo_nome;
			document.getElementById("texto-modal-cpf").textContent = conteudo_cpf;
			document.getElementById("texto-modal-proposta").textContent = conteudo_proposta;
			document.getElementById("texto-modal-endereco").textContent = conteudo_endereco;
			modal_confirmar.show();
			return;

		} else {
			enviar.disabled = true;
		}

	});

	var myForm = document.getElementById('formulario');
	myForm.addEventListener('submit', function (e) {
		e.preventDefault();
		if (verificapreenchimento()) {
			modal_aguarde.show();
			myForm.submit();
		} else {
			var enviar = document.getElementById('enviar')
			enviar.disabled = true;
			checkbox.checked = false;
			modal_alerta.show();
		}


	});


	//função para verifica se campo foi preenchido

	/* function verificacampo(campo){

	  var campo = getElementById('basic-addon1');
	  var alerta = getElementById('alerta');

	  if (campo === "") {

		alerta.style.display = "block";
	    
	  }

	  else{

		alerta.style.display = "none";

	  }
	} */

	//Carroseul de imagens

    document.addEventListener("DOMContentLoaded", function () {
        var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExampleDark"), {
            interval: 5000, // Tempo de troca (5 segundos)
            wrap: true // Permite looping infinito
        });
    });


});