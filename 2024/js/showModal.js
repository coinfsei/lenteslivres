$(document).ready(function () {
	
	const modalEnviado = document.getElementById('enviado-modal');
	var modal_enviado = new bootstrap.Modal(modalEnviado, {
	});
		
	modal_enviado.show();

	document.getElementById('fechar_modal_enviado').addEventListener('click', async function () {
		modal_enviado.hide();
	});

});
