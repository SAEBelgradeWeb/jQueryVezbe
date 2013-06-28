(function(){
	$(document).ready(function(){
		//Prvi zadatak
		//$('ul.lista > li').addClass('green'); ili
		//$('ul').find('li').addClass('green');

		//Drugi zadatak
		//$('ul.lista > li:nth-child(2)').addClass('green');
		//$('ul.lista').children().eq(1).addClass('green');
		
		//Treci zadatak
		//$('p').after('<h2>Ovo je naslov posle paragrafa </h2>');
		
		//Cetvrti zadatak
		//$('ul.lista>li>ul').prepend('<li>nova stavka</li>');
		
		//Peti zadatak
		//$('ul.lista>li:nth-child(3)').siblings().addClass('green');
		//ili
		//$('ul.lista>li').eq(2).siblings().addClass('green');

		//Sesti zadatak
		
		//$('h1').text('ovo je novi naslov');

		//Sedmi zadatak
		/*$('p').prepend('Ovo je nova recenica na pocetku naseg paragrafa. ');


		$('button').click(function(){
			var link_kesirano = $('link');
			var css_fajl = $(this).data('link') + '.css';
			var trenutni = link_kesirano.attr('href');
			$(link_kesirano).attr('href',igor);
		});*/


		/*$('.thumbs a').click(function(e){

			e.preventDefault();
			var link = $(this).children().attr('src');
			$('.big img').attr('src',link);
			var autor = $(this).data('autor');
			var godina = $(this).data('godina');
			var muzej = $(this).data('muzej');
			$('ul>li:nth-child(1)').text('Autor: ').append(autor);
			$('ul>li:nth-child(2)').text('Godina: ').append(godina);
			$('ul>li:nth-child(3)').text('Muzej: ').append(muzej);
			$('body').attr('style','background-image:url('+link+'); background-size: 100% auto;');
		})*/

		$('h1').on('mouseenter',function(){
			$('.overlay').fadeIn('100');
			$('.popup').fadeIn('100');
		});

		$('.submit_forme').on('click',function(e){
			e.preventDefault();
			$('.popup').fadeOut();
			window.location = 'galerija.html';
		});


	});


})();











