$(document).ready(function () {

  const sleep = ms => new Promise(res => setTimeout(res, ms));

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
			  var conteudo_nome = document.getElementById("texto-modal-endereco").textContent;
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
       

});

