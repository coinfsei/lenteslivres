$(document).ready(function () {

	$("como-enviar-botao").classList.add("active");
	
	const modalEnviado = document.getElementById('enviado-modal');
	var modal_enviado = new bootstrap.Modal(modalEnviado, {
	});
	
	function showEnviado() {
		modal_enviar.show();
	}

});
