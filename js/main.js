$('.wrapper .leftblock').on('input', "input:text", {typeExchange: "sell" }, mainEngine)


function mainEngine(e){
var selector_;
var firstInputField;
var secondInputField;
var firstInputField;
var secondInputField;

if (e.data.typeExchange=="sell") {
	selector_='[name="firstSelector"]';
	firstInputField='[name="inputField1"]';
	secondInputField='[name="inputField2"]';
	firstSpanField='.dataSellWmr';
 	secondSpanField='.dataSellWmz';
}


var selectorStatus=parseInt($(selector_).children("option:selected").val());
var fieldName=$(this).attr('name');
var currency;
console.log(selectorStatus);
if ($(this).val() == '') {
	$(firstInputField).val('');
	$(secondInputField).val('');
		return;
}

if (!selectorStatus) {

		$(firstInputField).val("Выберите валюту");
		$(secondInputField).val("Выберите валюту");
		return;
		

}

if (!$.isNumeric($(this).val())) {
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
	// console.log(selectorStatus)
	// console.log($('.dataSellWmr').text())
	// console.log(currency)


	var result;

	if (fieldName=="inputField1") {

	   	result=(parseInt($(this).val())*currency).toFixed(2)
		$(secondInputField).val(result)
	}
	else {

		result=(parseInt($(this).val())/currency).toFixed(2)
		$(firstInputField).val(result)
	}



}