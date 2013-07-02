
(function(){
$(document).ready(function(){
	// var za default, uzimamo css body
		var defolt = $('body').attr('style');
		// kad hoverujemo a
		$('ul li a').on('mouseenter', function(){
			// uzimamo atribut sa linka
		var source = $(this).attr('data-slika');
		// stavljamo style + kod plus atribut na body
		$('body').attr('style', 'background-image:url('+source+');');
		
		}).on('mouseleave', function(){
		// na mouseleave stavljamo sliku koja je bila
			$('body').attr('style', defolt);
 
		});


})

})()