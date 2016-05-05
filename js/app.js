$(document).ready(function() {
	// $('#ready').hide();
	// $('#cool').hide();
	// $('#throw').hide();
	$('#fighter-box').mouseenter(function() {
		$('#still').hide();
		$('.how-to').hide();
		$('#hulk-still').hide();
		$('#ready').show();
		$('#hulk-ready').show();
	})
	    .mouseleave(function() {
        	$('#ready').hide();
        	$('#hulk-ready').hide();
        	$('#still').show();
        	$('#hulk-still').show();
     })
	    .mousedown(function() {
	    	playHadouken();
	    	$('#ready').hide();
	    	$('#throw').show();
	    	// hadouken move
	    	$('#hadouken').finish().show().animate(
  				{'left': '65em'},
  				500,
  				function() {
    			$(this).hide();
    			$(this).css('left', '30em');
  				}
  				);
	    	$('#hulk-ready').hide();
	    	$('#hulk-throw').show();
	    	// hadouken move
	    	$('#hulk-hadouken').finish().show().animate(
  				{'left': '20em'},
  				500,
  				function() {
    			$(this).hide();
    			$(this).css('left', '45em');
  				}
  				);
	 })
	    .mouseup(function() {
	    	$('#throw').hide();
	    	$('#hulk-throw').hide();
	    	// $('#hadouken').hide();
	    	$('#ready').show();
	    	$('#hulk-ready').show();

	 });


	$(document).keydown(function (e) {
			if(e.keyCode ==88 ) {
				$('#still').hide();
				$('#ready').hide();
				$('#throw').hide();
				$('#cool').show();
			}
	    })
			.keyup(function(e){
				if(e.keyCode ==88 ) {
				$('#cool').hide();
				$('#ready').hide();
				$('#throw').hide();
				$('#still').show();
				}
			});

	    	// sound
	function playHadouken () {
  		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
  		$('#hadouken-sound')[0].play();
}
});
