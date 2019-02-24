$("input:text").on('input', function(){


	var fieldName=$(this).attr('name');
	var selectorStatus=parseInt($('[name="firstSelector"]').children("option:selected").val());
	var currency;
	
	switch(selectorStatus)	{

		case 0:
		currency=0;
		break;

		case 1:
		currency= parseFloat($('.dataSellWmr').text());
		break;

		case 2:
		currency= parseFloat($('.dataSellWmz').text());
		break;

	}
	// console.log(selectorStatus)
	// console.log($('.dataSellWmr').text())
	// console.log(currency)


	var result;

	if (fieldName=="inputField1") {

	   	result=(parseInt($(this).val())*currency).toFixed(2)
		$('[name="inputField2"]').val(result)
	}
	else {

		result=(parseInt($(this).val())/currency).toFixed(2)
		$('[name="inputField1"]').val(result)
	}



})