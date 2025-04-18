$(document).ready(function () {

	function removerEspacoFinal(myString) {
			if (myString.slice(-1) === " ") return myString.slice(0, -1);
			else return myString;
	}	

	var nome = document.getElementById("nome").value
	nome = removerEspacoFinal(nome)
	var profissao = document.getElementById("profissao").value
	profissao = removerEspacoFinal(profissao)
	var email = document.getElementById("email").value
	email = removerEspacoFinal(email)
	var cpf = document.getElementById("cpf").value
	cpf = removerEspacoFinal(cpf)
	var rg = document.getElementById("rg").value
	rg = removerEspacoFinal(rg)
	var orgao_expedidor = document.getElementById("orgao_expedidor").value
	orgao_expedidor = removerEspacoFinal(orgao_expedidor)
	var telefone_1 = document.getElementById("telefone_1").value
	telefone_1 = removerEspacoFinal(telefone_1)
	var telefone_2 = document.getElementById("telefone_2").value
	telefone_2 = removerEspacoFinal(telefone_2)
	var rua = document.getElementById("rua").value
	rua = removerEspacoFinal(rua)
	var bairro = document.getElementById("bairro").value
	bairro = removerEspacoFinal(bairro)
	var municipio = document.getElementById("municipio").value
	municipio = removerEspacoFinal(municipio)
	var cep = document.getElementById("cep").value
	cep = removerEspacoFinal(cep)
	var uf = document.getElementById("uf").value
	uf = removerEspacoFinal(uf)
	var proposta = document.getElementById("proposta").value
	proposta = removerEspacoFinal(proposta)
	var foto = document.getElementById("foto").value
	var video = document.getElementById("video").value
	var identidade = document.getElementById("identidade").value
	var desc_prop = document.getElementById("desc_prop").value
	//var termo_premi = document.getElementById("termo_premi").value 

	var nome_valid = /(^[a-zA-Z0-9ÁÂÃÄËÉÊÏÍÎÓÔÕÖÜÚçáäâãëéêíïîóôöõúûü\']+([a-zA-Z0-9ÁÂÃÄËÉÊÏÍÎÓÔÕÖÜÚçáäâãëéêíïîóôöõúûü\']|((\ |\. |º|ª)[a-zA-Z0-9ÁÂÃÄËÉÊÏÍÎÓÔÕÖÜÚçáäâãëéêíïîóôöõúûü\']+)*)\.?$)/g;
	var email_valid = /(^[a-zA-Z0-9\.\_\-]+@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$)/g;
	var cpf_valid = /(^[0-9]{11}$)|(^([0-9]{3}\.){2}[0-9]{3}\-[0-9]{2}$)/g;
	var rg_valid = /(^[0-9]{4,12}$)|(^([0-9]{1,3}\.){2}([0-9]{1,3}\-)([0-9]{1,3})$)/g;
	var cep_valid = /^(4[0-8]([0-9]){6})|(4[0-8]([0-9]){3}\-[0-9]{3})$/g;
	var uf_valid = /^[a-zA-Z]{2}$/g;
	var rua_valid = /(^[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû\.\,\']+([a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû\.\,\']|((\ |\-|\,\ |\.\ )[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû\.\,\']+)*)$)/
	var bairro_valid = /(^[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû\.\,\']+([a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû\.\,\']|((\ |\-|\.\ )[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû\.\,\']+)*)$)/
	var telefone_valid = /^([0-9]{10,12}|[0-9]{6,8}\-[0-9]{4}|\([0-9]{2,3}\)[0-9]{8,9}|\([0-9]{2,3}\)[0-9]{4,5}\-[0-9]{4})$/g;
	var telefone2_valid = /(^([0-9]{10,12}|[0-9]{6,8}\-[0-9]{4}|\([0-9]{2,3}\)[0-9]{8,9}|\([0-9]{2,3}\)[0-9]{4,5}\-[0-9]{4})$|^$)/g;
	var orgao_expedidor_valid = /^(?:[a-zA-Z0-9\/]|[a-zA-Z0-9\/](?:\-|\ ))+$/g;
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
	nome = removerEspacoFinal(nome)
	document.getElementById("nome").value = nome
	var profissao = document.getElementById("profissao").value
	profissao = removerEspacoFinal(profissao)
	document.getElementById("profissao").value = profissao
	var email = document.getElementById("email").value
	email = removerEspacoFinal(email)
	document.getElementById("email").value = email
	var cpf = document.getElementById("cpf").value
	cpf = removerEspacoFinal(cpf)
	document.getElementById("cpf").value = cpf
	var rg = document.getElementById("rg").value
	rg = removerEspacoFinal(rg)
	document.getElementById("rg").value = rg
	var orgao_expedidor = document.getElementById("orgao_expedidor").value
	orgao_expedidor = removerEspacoFinal(orgao_expedidor)
	document.getElementById("orgao_expedidor").value = orgao_expedidor
	var telefone_1 = document.getElementById("telefone_1").value
	telefone_1 = removerEspacoFinal(telefone_1)
	document.getElementById("telefone_1").value = telefone_1
	var telefone_2 = document.getElementById("telefone_2").value
	telefone_2 = removerEspacoFinal(telefone_2)
	document.getElementById("telefone_2").value = telefone_2
	var rua = document.getElementById("rua").value
	rua = removerEspacoFinal(rua)
	document.getElementById("rua").value = rua
	var bairro = document.getElementById("bairro").value
	bairro = removerEspacoFinal(bairro)
	document.getElementById("bairro").value = bairro
	var municipio = document.getElementById("municipio").value
	municipio = removerEspacoFinal(municipio)
	document.getElementById("municipio").value = municipio
	var cep = document.getElementById("cep").value
	cep = removerEspacoFinal(cep)
	document.getElementById("cep").value = cep
	var uf = document.getElementById("uf").value
	uf = removerEspacoFinal(uf)
	document.getElementById("uf").value = uf
	var proposta = document.getElementById("proposta").value
	proposta = removerEspacoFinal(proposta)
	document.getElementById("proposta").value = proposta
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

		if (!rua.match(rua_valid)) {
			invalid_modal("rua");
			invalid = true;
		}

		if (!bairro.match(bairro_valid)) {
			invalid_modal("bairro");
			invalid = true;
		}

		if (!municipio) {
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
		if (!(video && validarArquivo('video', 'aviso-tamanho-video', 550, 'video/mp4,video/m4v,video/m4a,video/mkv,video/quicktime,video/mov,video/webm'))) {
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
		var nome = document.getElementById("nome").value
	nome = removerEspacoFinal(nome)
	var cpf = document.getElementById("cpf").value
	cpf = removerEspacoFinal(cpf)
	var rua = document.getElementById("rua").value
	rua = removerEspacoFinal(rua)
	var bairro = document.getElementById("bairro").value
	bairro = removerEspacoFinal(bairro)
	var municipio = document.getElementById("municipio").value
	municipio = removerEspacoFinal(municipio)
	var cep = document.getElementById("cep").value
	cep = removerEspacoFinal(cep)
	var uf = document.getElementById("uf").value
	uf = removerEspacoFinal(uf)
	var proposta = document.getElementById("proposta").value
	proposta = removerEspacoFinal(proposta)
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


	// Aplicação de máscara para CPF

	document.getElementById('cpf').addEventListener('input', function (e) {
		let mas_cpf = e.target.value;
		if ((mas_cpf.length > 4 && (mas_cpf.substring(4,5) !== "-" && mas_cpf.substring(4,5) !== ".")) || (mas_cpf.length > 8 && (mas_cpf.substring(8,9) !== "-" && mas_cpf.substring(8,9) !== ".")) && mas_cpf.includes(".")) {
			mas_cpf = mas_cpf.replace(/\./g, '');
			mas_cpf = mas_cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
			mas_cpf = mas_cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
			if (mas_cpf.length >= 12 && mas_cpf.substring(10,11) === "-") mas_cpf = mas_cpf.replace(/\-/g, '');
		}
		if (mas_cpf.length > 12 && (mas_cpf.substring(12,13) !== "-" && mas_cpf.substring(12,13) !== ".")) {
			mas_cpf = mas_cpf.replace(/\-/g, '');
			mas_cpf = mas_cpf.replace(/[^0-9\.\-]/g, ''); 
		}
		if (mas_cpf.length !== 4 && mas_cpf.length !== 8 && mas_cpf.slice(-1) === ".") {
			mas_cpf = mas_cpf.substring(0, mas_cpf.length - 1);		
		}
		if (mas_cpf.length !== 12 && mas_cpf.slice(-1) === "-") {
			mas_cpf = mas_cpf.substring(0, mas_cpf.length - 1);		
		}
		if (mas_cpf.length < 12) {
			mas_cpf = mas_cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
			mas_cpf = mas_cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
			mas_cpf = mas_cpf.replace(/[^0-9\.\-]/g, ''); 
		} else {
			mas_cpf = mas_cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
		}
		if (mas_cpf.length === 13 && !mas_cpf.slice(-3).includes("-")) {
			mas_cpf = mas_cpf.substring(0,11) + "-" + mas_cpf.substring(11,13); 
		}
		e.target.value = mas_cpf;
	});

	//Aplicação de máscara para CEP

	document.getElementById('cep').addEventListener('input',function (e) {
		let mas_cep = e.target.value; 
		if (mas_cep.length !== 6 && mas_cep.slice(-1) === "-") {
			mas_cep = mas_cep.substring(0, mas_cep.length - 1);		
		}
		if (mas_cep.length > 5 && mas_cep.substring(5,6) !== "-" && mas_cep.includes("-")) {
			mas_cep = mas_cep.replace(/\-/g, '');
		}
		mas_cep = mas_cep.replace(/(\d{5})(\d)/, '$1-$2'); 
		e.target.value = mas_cep;

	});


	//Aplicação de máscara para Telefone 1
	document.getElementById('telefone_1').addEventListener('input', function (e) {
    let mas_tel = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    mas_tel = mas_tel.replace(/(\d{2})(\d)/, '($1)$2'); // Adiciona os parênteses e espaço
    mas_tel = mas_tel.replace(/(\d{4})(\d)/, '$1-$2'); // Adiciona o traço após os 4 primeiros dígitos
	if (mas_tel.length >= 14) mas_tel = mas_tel.substring(0,8) + mas_tel.substring(9,10) + mas_tel.substring(8,9) + mas_tel.substring(10,14); 
	mas_tel = mas_tel.substring(0,14); // Limita o tamanho máximo para (00) 00000-0000
    e.target.value = mas_tel;
	});

	//Aplicação de máscara para Telefone 2
	document.getElementById('telefone_2').addEventListener('input', function (e) {
    let mas_tel = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    mas_tel = mas_tel.replace(/(\d{2})(\d)/, '($1)$2'); // Adiciona os parênteses e espaço
    mas_tel = mas_tel.replace(/(\d{4})(\d)/, '$1-$2'); // Adiciona o traço após os 4 primeiros dígitos
	if (mas_tel.length >= 14) mas_tel = mas_tel.substring(0,8) + mas_tel.substring(9,10) + mas_tel.substring(8,9) + mas_tel.substring(10,14); 
	mas_tel = mas_tel.substring(0,14); // Limita o tamanho máximo para (00) 00000-0000
    e.target.value = mas_tel;
	});

});