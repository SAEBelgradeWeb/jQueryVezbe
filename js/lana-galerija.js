(function(){
	$(document).ready(function(){
		var pocetna = $('body').attr('style');
		$('ul li a').hover(function(){
			var slika = $(this).attr('data-slika');
			$('body').attr('style','background-image:url('+slika+');');
		},
		function(){
			$('body').attr('style',pocetna)
		});
	});
})()