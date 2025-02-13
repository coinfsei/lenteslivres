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

          checkbox.addEventListener('change', function(){
			
			firstTime = document.getElementById("texto-modal-confirma").textContent.includes("[placeholder]");
			firstTimeEnd = false;
            if (checkbox.checked) {
			  var nome = document.getElementById("nome").value;
			  console.log(nome);
			  var conteudo = document.getElementById("texto-modal-confirma").textContent;
			  if (!firstTime) {
				  conteudo = conteudo.replace("[placeholder]", `${nome}`);
				  modal_confirmar.show();
				  document.getElementById("texto-modal-confirma").textContent = conteudo;
				  return;
			  } else {
				  conteudo = conteudo.replace("[placeholder]", `${nome}`);
				  modal_confirmar.show();
				  document.getElementById("texto-modal-confirma").textContent = conteudo;
				  firstTimeEnd = true;
			  }
			   
            //botão Recusar
            function esperar(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
              checkbox.checked = false;
          }
              document.getElementById('rejeitar_envio').addEventListener('click', async function() {
				      document.getElementById("texto-modal-confirma").textContent = conteudo;
              modal_confirmar.hide();
              checkbox.checked = false;
              await esperar(3000);
              conteudo = conteudo.replace(`${nome}`,"[placeholder]");
              document.getElementById("texto-modal-confirma").textContent = conteudo;
              checkbox.checked = false;
 

				/*if (firstTimeEnd)
					await alert('É necessário concordar com a declaração de autoria e residencia para prosseguir.');
                modal_confirmar.hide();
				await sleep(1000);
				conteudo = conteudo.replace(`${nome}`,"[placeholder]");
        */
				
            });
    
            // Botão Aceitar
            document.getElementById('aceitar_envio').addEventListener('click', async function() {
              modal_confirmar.hide();
			          await sleep(1000);
			          conteudo = conteudo.replace(`${nome}`,"[placeholder]");
			          document.getElementById("texto-modal-confirma").textContent = conteudo;
                  enviar.disabled = false;
                  

            });


            }else{

              enviar.disabled = true;
            }
        
        });
       

});

