$('.wrapper .leftblock').on('input', "input:text", {typeExchange: "sell", checkStatus: "present" }, mainEngine)
$('.wrapper .rightblock').on('input', "input:text", {typeExchange: "buy" }, mainEngine)
$('.wrapper [name="firstSelector"]').on('input', {typeExchange: "sell", checkStatus: "none"}, mainEngine)


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


if ($(this).val() == '' && e.data.checkStatus=="present") {
	$(firstInputField).val('');
	$(secondInputField).val('');
		return;
}

if (!selectorStatus && e.data.checkStatus=="present") {
		$(firstInputField).val("Выберите валюту");
		$(secondInputField).val("Выберите валюту");
		return;
}

if (!$.isNumeric($(this).val()) && e.data.checkStatus=="present") {
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


	if (e.data.checkStatus=="none") {

	if ($(this).attr('name')=="firstSelector"){
		result=(parseInt($(firstInputField).val())*currency).toFixed(2)
		$(secondInputField).val(result)
	};
	

	


	return;
	}

	if (fieldName==fieldNameToCheck) {

	   	result=(parseInt($(this).val())*currency).toFixed(2)
		$(secondInputField).val(result)
	}
	else {

		result=(parseInt($(this).val())/currency).toFixed(2)
		$(firstInputField).val(result)
	}
}