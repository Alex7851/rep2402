$('.wrapper .leftblock').on('input', "input:text", {typeExchange: "sell", checkStatus: "present" }, mainEngine)
$('.wrapper .rightblock').on('input', "input:text", {typeExchange: "buy" , checkStatus: "present" }, mainEngine)
$('.wrapper [name="firstSelector"]').on('input', {typeExchange: "sell", checkStatus: "none"}, mainEngine)
$('.wrapper [name="secondSelector"]').on('input', {typeExchange: "buy", checkStatus: "none"}, mainEngine)




function mainEngine(e){
	var selector_;
	var firstInputField;
	var secondInputField;
	var firstInputField;
	var secondInputField;
	var fieldNameToCheck;

	if (e.data.typeExchange=="sell") {
		selector_='[name="firstSelector"]';
		firstInputField='[name="inputField1"]';
		secondInputField='[name="inputField2"]';
		firstSpanField='.dataSellWmr';
	 	secondSpanField='.dataSellWmz';
	 	fieldNameToCheck="inputField1";
	}
	else {
		selector_='[name="secondSelector"]';
		firstInputField='[name="inputField4"]';
		secondInputField='[name="inputField3"]';
		firstSpanField='.dataBuyWmr';
	 	secondSpanField='.dataBuyWmz';
	 	fieldNameToCheck="inputField4";
	}


var selectorStatus=parseInt($(selector_).children("option:selected").val());
var fieldName=$(this).attr('name');
var currency;




if (!selectorStatus && e.data.checkStatus=="present") {
		$(firstInputField).val("Выберите валюту");
		$(secondInputField).val("Выберите валюту");
		return;
}

if (!$.isNumeric($(this).val()) || $(this).val() == '' && e.data.checkStatus=="present") {
	$(firstInputField).val("");
	$(secondInputField).val("");
	return;
}
	
	
	switch(selectorStatus)	{
		case 1:
		currency= parseFloat($(firstSpanField).text());
		break;
		
		case 2:
		currency= parseFloat($(secondSpanField).text());
		break;
	}
	
	var result;

 // Этот блок срабатывает только при смене валюты:  здесь проверка на поля отличная от ввода в input и отдельный расчет только нижнего поля
 // ----------------------------------------------------------------------------------------------------------------
	if (e.data.checkStatus=="none") {

		if ($(this).attr('name')=="firstSelector"){

			if (!$.isNumeric($(firstInputField).val()) || $(firstInputField).val() == '') {
				$(firstInputField).val("");
				$(secondInputField).val("");
				return;
			}
			result=(parseInt($(firstInputField).val())*currency).toFixed(2)
			$(secondInputField).val(result);
		};

		if ($(this).attr('name')=="secondSelector"){

			if (!$.isNumeric($(secondInputField).val()) || $(secondInputField).val() == '') {
				$(firstInputField).val("");
				$(secondInputField).val("");
				return;
			}
			result=(parseInt($(secondInputField).val())/currency).toFixed(2)
			$(firstInputField).val(result);
		};

	return;
	}
// -----------------------------------------------------------------------------------------------------------
	

	if (fieldName==fieldNameToCheck) {

	   	result=(parseInt($(this).val())*currency).toFixed(2)
		$(secondInputField).val(result)
	}
	else {

		result=(parseInt($(this).val())/currency).toFixed(2)
		$(firstInputField).val(result)
	}
}