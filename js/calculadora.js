function calculo() {
	//passando os valores do campo do form para as variaveis
	tarifa = Number(document.meu_form.tarifa.value);
	comissaoFixa = Number(document.meu_form.comissaoFixa.value);
	comissaoFixa = Number(comissaoFixa / 100);


	comissaoBruta =  (tarifa * comissaoFixa); //fazendo a soma

	document.meu_form.comissaoBruta.value = comissaoBruta.toFixed(2);

	var gateway = 0.0385 // Taxa de pagamento 3.85%
	var pis = 0.0165 // Imposto PIS 1.65%
	var confins = 0.076 // Imposto Confins 7.60%
	subtotal = comissaoBruta - ((comissaoBruta * gateway) + (comissaoBruta * pis) + (comissaoBruta * confins))

	document.meu_form.subtotal.value = subtotal.toFixed(2);

	var inss = 0.11 // 11% INSS
	var iss = 0.02 // 2% ISS










}