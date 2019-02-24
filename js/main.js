$('.wrapper .leftblock').on('input', "input:text", {typeExchange: "sell" }, mainEngine)


function mainEngine(){




var selectorStatus=parseInt($('[name="firstSelector"]').children("option:selected").val());
var fieldName=$(this).attr('name');
var currency;

if ($(this).val() == '') {
	$('[name="inputField1"]').val('');
		$('[name="inputField2"]').val('');
		return;
}

if (!selectorStatus) {

		$('[name="inputField1"]').val("Выберите валюту");
		$('[name="inputField2"]').val("Выберите валюту");
		return;
		

}

if (!$.isNumeric($(this).val())) {
$(this).val('');
return;


}
	
	
	switch(selectorStatus)	{

		

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



}