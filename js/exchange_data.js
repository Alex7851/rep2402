setTimeout(()=>{
	data = {
		sell:{
				wmr: 0.96,
				wmz: 55.7,
			},

		buy:{
				wmr:1,
				wmz:58.9,
			}
	}
	$('.dataSellWmr').text(data.sell.wmr);
	$('.dataSellWmz').text(data.sell.wmz);
	$('.dataBuyWmr').text(data.buy.wmr);
	$('.dataBuyWmz').text(data.buy.wmz);

	getData();

	function getData(){
		
		$('[name="inputField1"]').val(localStorage.getItem('input1'))
		$('[name="inputField2"]').val(localStorage.getItem('input2'))
		$('[name="inputField3"]').val(localStorage.getItem('input3'))
		$('[name="inputField4"]').val(localStorage.getItem('input4'))
	}


},2000)


 



