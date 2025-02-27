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
			var cidade = document.getElementById("cidade").value
			var cep = document.getElementById("cep").value
			var uf = document.getElementById("uf").value 
			var orgao_expedidor = document.getElementById("orgao_expedidor").value
			var agencia = document.getElementById("agencia").value 
			var conta_bancaria = document.getElementById("conta_bancaria").value
			var tipo_conta = document.getElementById("tipo_conta").value
			var pis_nit = document.getElementById("pis_nit").value
			var proposta = document.getElementById("proposta").value 
			var pis_nit = document.getElementById("pis_nit").value 
			var foto = document.getElementById("foto").value
			var video = document.getElementById("video").value
			var identidade = document.getElementById("identidade").value
			var identi_candi = document.getElementById("identi_candi").value
			var termo_premi = document.getElementById("termo_premi").value
			
			var nome_valid = /(^[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+([a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]|(\ [a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+)*)$)/g;
			var email_valid = /(^[a-zA-Z0-9]+\@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$)/g;
			var cpf_valid = /(^[0-9]{11}$)|(^([0-9]{3}\.){2}[0-9]{3}\-[0-9]{2}$)/g;
			var rg_valid = /(^[0-9]{6,14}$)|(^([0-9]|[0-9][0-9\-\.]){6,14}$)/g;
			var cep_valid = /^([0-9]{8}|[0-9]{5}\-[0-9]{3})$/g;
			var uf_valid = /^[a-zA-Z]{2}$/g;
			var telefone_valid = /^([0-9]{10,12}|[0-9]{4,8}\-[0-9]{4}|\+[0-9]{12,14}|\+[0-9]{8,10}\-[0-9]{4})$/g;
			var telefone2_valid = /(^([0-9]{10,12}|[0-9]{4,8}\-[0-9]{4}|\+[0-9]{12,14}|\+[0-9]{8,10}\-[0-9]{4})$|^$)/g;
			var orgao_expedidor_valid = /(^(([a-zA-Z0-9]|([a-zA-Z0-9]\-))+$)+)/g;
			var agencia_valid = /^[0-9]{4,5}$/g;
			var conta_bancaria_valid = /^[0-9]{8,20}$/g;
			var pis_nit_valid = /^[0-9]{8,20}$/g;
			

  const sleep = ms => new Promise(res => setTimeout(res, ms));

  function validarCPF(inputCPF){
    var soma = 0;
    var resto;

    if(inputCPF == '00000000000') return false;
    for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(9, 10))) return false;

    soma = 0;
    for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(10, 11))) return false;
    return true;
  }

	function invalid_modal(invalid_field) {
			console.log(invalid_field);
				document.getElementById(invalid_field).classList.add("invalido");
				var nodes = document.getElementById(invalid_field).parentNode.children;
				for(var i=0; i<nodes.length; i++) {
					nodes[i].classList.add("invalido");	
					document.getElementById(invalid_field).classList.remove("invalido");
				}
			}

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
				var cidade = document.getElementById("cidade").value
				var cep = document.getElementById("cep").value
				var uf = document.getElementById("uf").value 
				var orgao_expedidor = document.getElementById("orgao_expedidor").value
				var agencia = document.getElementById("agencia").value 
				var conta_bancaria = document.getElementById("conta_bancaria").value
				var tipo_conta = document.getElementById("tipo_conta").value
				var pis_nit = document.getElementById("pis_nit").value
				var proposta = document.getElementById("proposta").value 
				var pis_nut = document.getElementById("pis_nit").value 
				var foto = document.getElementById("foto").value
				var video = document.getElementById("video").value
				var identidade = document.getElementById("identidade").value
				var identi_candi = document.getElementById("identi_candi").value
				var termo_premi = document.getElementById("termo_premi").value

				
				Array.from(document.querySelectorAll('.invalido')).forEach(
			    (el) => el.classList.remove("invalido"));
				
				console.log(name)
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
				
				if (!cidade.match(nome_valid)) {
						invalid_modal("cidade");
						invalid = true;
				}
				

				if (!orgao_expedidor.match(orgao_expedidor_valid)) {
						invalid_modal("orgao_expedidor");
						invalid = true;
				}
				
				if (!agencia.match(agencia_valid)) {
						invalid_modal("agencia");
						invalid = true;
				}
				
				if (!conta_bancaria.match(conta_bancaria_valid)) {
						invalid_modal("conta_bancaria");
						invalid = true;
				}
				
				if (!tipo_conta.match(nome_valid)) {
						invalid_modal("tipo_conta");
						invalid = true;
				}
				if (!pis_nit.match(pis_nit_valid)) {
						invalid_modal("pis_nit");
						invalid = true;
				}
				if (!proposta) {
						invalid_modal("proposta");
						invalid = true;
				}
				if (!foto) {
						invalid_modal("foto");
						invalid = true;
				}
				if (!video) {
						invalid_modal("video");
						invalid = true;
				}
				if (!identidade) {
						invalid_modal("identidade");
						invalid = true;
				}
				if (!identi_candi) {
						invalid_modal("identi_candi");
						invalid = true;
				}
				
				if (invalid) return false; 
				return true;

			}

  // Smooth scrolling
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "" && !$(this).attr("data-toggle")) {
      event.preventDefault();
      var hash = this.hash;

      // Verifique se o elemento com o hash existe antes de tentar rolar
      if ($(hash).length) {
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          700,
          function () {
            window.location.hash = hash;
          }
        );
      }

      // Collapse the navbar after clicking on an item (only on mobile view)
      if ($(".navbar-toggler").is(":visible")) {
        $(".navbar-collapse").collapse("hide");
      }
    }
  });

  // Show modal when clicking on the "Download" menu item
  $('a[href="#download"]').on("click", function (event) {
    event.preventDefault();
    $("#downloadModal").modal("show");
  });

  // Show gallery modal when clicking on the "Gallery" menu item
  $('a[href="#gallery"]').on("click", function (event) {
    event.preventDefault();
    $("#galleryModal").modal("show");
  });

  // Show versoes modal when clicking on the "Versoes" menu item
  $('a[href="#versoes"]').on("click", function (event) {
    event.preventDefault();
    $("#previousVersionsModal").modal("show");
  });

  // Activate scrollspy
  $("body").scrollspy({ target: ".navbar", offset: 90 });

  // Prevent scrolling when clicking on tab links
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Check if the hash is present in the URL and remove it to prevent scroll
    if (history.pushState) {
      history.pushState(null, null, " ");
    } else {
      window.location.hash = "";
    }
  });

  // Mostrar botões flutuantes ao rolar para o fim da página
  $(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    if (
      scrollPosition <= 100 ||
      scrollPosition + windowHeight >= documentHeight - 100
    ) {
      $("#botao-inscricao").fadeIn();
      $("#botao-submissao").fadeIn();
      $("#botao-compartilhar").fadeIn();
    } else {
      $("#botao-inscricao").fadeOut();
      $("#botao-submissao").fadeOut();
      $("#botao-compartilhar").fadeOut();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function () {
      this.classList.toggle("collapsed");
    });
  });

  // Collapse navbar when clicking on the brand link
  $('a.navbar-brand').on('click', function () {
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Script para alternar entre Expandir biografia e Recolher biografia 
  document.querySelectorAll('.toggle-btn').forEach(function(button) {
    button.addEventListener('click', function() {
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
        const modalEleconfir = document.getElementById('confirmar-modal');
        modal_confirmar = new bootstrap.Modal(modalEleconfir, {
            backdrop: 'static',
            keyboard: false
        });
		const modalAlerta = document.getElementById('alertar-modal');
		var modal_alerta = new bootstrap.Modal(modalAlerta, {

      

        }); 
		
		document.getElementById('fechar_modal_alerta').addEventListener('click', async function() {
				modal_alerta.hide();
				checkbox.checked = false;
		});

		
		//botão Recusar

            
			document.getElementById('rejeitar_envio').addEventListener('click', async function() {
			  var nome = document.getElementById("nome").value;
			  var proposta = document.getElementById("proposta").value;
			  var cpf = document.getElementById("cpf").value;
			  var rua = document.getElementById("rua").value;
			  var bairro = document.getElementById("bairro").value;
			  var cidade = document.getElementById("cidade").value;
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
			  conteudo_endereco = conteudo_endereco.replace(`${rua}, ${bairro}, ${cidade}, ${uf}, CEP: ${cep},`, "[placeholder]"); 
			  document.getElementById("texto-modal-nome").textContent = conteudo_nome;
			  document.getElementById("texto-modal-cpf").textContent = conteudo_cpf;
			  document.getElementById("texto-modal-proposta").textContent = conteudo_proposta;
			  document.getElementById("texto-modal-endereco").textContent = conteudo_endereco;
            });
    
            // Botão Aceitar
            document.getElementById('aceitar_envio').addEventListener('click', async function() {
					var nome = document.getElementById("nome").value;
					var proposta = document.getElementById("proposta").value;
					var cpf = document.getElementById("cpf").value;
					var rua = document.getElementById("rua").value;
					var bairro = document.getElementById("bairro").value;
					var cidade = document.getElementById("cidade").value;
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
					conteudo_endereco = conteudo_endereco.replace(`${rua}, ${bairro}, ${cidade}, ${uf}, CEP: ${cep},`, "[placeholder]"); 
					document.getElementById("texto-modal-nome").textContent = conteudo_nome;
					document.getElementById("texto-modal-cpf").textContent = conteudo_cpf;
					document.getElementById("texto-modal-proposta").textContent = conteudo_proposta;
					document.getElementById("texto-modal-endereco").textContent = conteudo_endereco;
            });
          

          checkbox.addEventListener('change', function(){
			  
			if (checkbox.checked && !verificapreenchimento()) {
				modal_alerta.show();
				checkbox.checked = false;
				return;
			}
			var nome = document.getElementById("nome").value;
			var proposta = document.getElementById("proposta").value;
			var cpf = document.getElementById("cpf").value;
			var rua = document.getElementById("rua").value;
			var bairro = document.getElementById("bairro").value;
			var cidade = document.getElementById("cidade").value;
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
				  conteudo_endereco = conteudo_endereco.replace("[placeholder]", `Rua: ${rua},\n Bairro: ${bairro},\n Cidade: ${cidade},\n UF: ${uf},\n CEP: ${cep}`); 
				  document.getElementById("texto-modal-nome").textContent = conteudo_nome;
				  document.getElementById("texto-modal-cpf").textContent = conteudo_cpf;
				  document.getElementById("texto-modal-proposta").textContent = conteudo_proposta;
				  document.getElementById("texto-modal-endereco").textContent = conteudo_endereco;
				  modal_confirmar.show();
				  return;
			   
            }else{
              enviar.disabled = true;
            }
        
        });
		
		var myForm = document.getElementById('formulario');
		myForm.addEventListener('submit', function(e){
		e.preventDefault();
		if (verificapreenchimento()) {
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
		
});