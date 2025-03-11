$(document).ready(function () {
/*
 // Smooth scrolling
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "" && !$(this).attr("data-toggle")) {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: (window.location.hash > $(hash).offset().top ? $(hash) : $(hash).offset().top
        },
        500,
        function () {
          window.location.hash = $(hash).offset().top;
        }
      ); 

      // Collapse the navbar after clicking on an item (only on mobile view)
      if ($(".navbar-toggler").is(":visible")) {
        $(".navbar-collapse").collapse("hide");
      }
    }
  });

  // Activate scrollspy
  $("body").scrollspy({ target: ".navbar", offset: 70 });

  // Prevent scrolling when clicking on tab links
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Check if the hash is present in the URL and remove it to prevent scroll
    if (history.pushState) {
      history.pushState(null, null, " ");
    } else {
      window.location.hash = "";
    }
  });
*/
  // Mostrar botÃµes flutuantes ao rolar para o fim da pÃ¡gina
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
      $("").fadeIn();
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

});
