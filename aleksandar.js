(function(){
	
	$(document).ready(function() {
		var $origin = $('body').attr('style');
      
      $('ul li a').hover(

             function() {
             	var $slika = $(this).attr('data-slika');
             
                $('body').attr('style', 'background-image: url('+$slika+');');
 		        
                $origin.fadeIn('slow');
             }, 
             function () {       
                $('body').attr('style', $origin);

                $('body').hide().fadeIn('slow');
             }
      );

  })


	
	})()