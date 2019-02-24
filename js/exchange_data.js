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
},1000)


