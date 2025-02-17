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
var pis_nut document.getElementById("pis_nit").value 
var foto = document.getElementById("foto").value
var video = document.getElementById("video").value
var identidade = document.getElementById("identidade").value
var identi_candi document.getElementById("identi_candi").value
var termo_premi document.getElementById("termo_premi").value

var name_valid = /^[a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+([a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]|(\ [a-zA-Z0-9ÁÂÃÉÊÍÎÓÔÕÚçáâãéêíîóôõúû]+)*)$/g;
var email_valid = /[a-zA-Z0-9]+\@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+/g;
var $cpf_valid = /^[0-9]{11}$/g;
var $rg_valid = /^[0-9]{6,14}$/g;
var $cep_valid = /^[0-9]{8}$/g;
var $telefone_valid = /^[0-9]{10,11}$/g;

function invalid_modal(invalid_field) {
	document.getElementById(invalid_field).classList.add("invalido");
	var nodes = document.getElementById('ID_of_parent').parentNode.childNodes;
	for(var i=0; i<nodes.length; i++) {
		nodes[i].classList.add("invalido");	
    }
}

function checkValid() {
	
	Array.from(document.querySelectorAll('.widget.hover')).forEach(
   (el) => el.classList.remove("invalido"));
	
	if (name.match(name_valid)) {
			invalid_modal("nome");
			return;
	}

	if (email.match(email_valid)) {
			invalid_modal("email");
			return;
	}

	if (cpf.match(cpf_valid)) {
			invalid_modal(cpf);
			return;
	}

	if (rg.match(rg_valid)) {
			invalid_modal(rg);
			return;
	}

	if (cep.match(cep_valid)) {
			invalid_modal(cep);
			return;
	}

	if (telefone_1.match(telefone_valid)) {
			invalid_modal(telefone_1);
			return;
	}

	if (telefone_2.match(telefone_valid)) {
			invalid_modal(telefone_2);
			return;
	}

	if (orgao_expedidor) {
			invalid_modal("orgao_expedidor");
			return;
	}

}