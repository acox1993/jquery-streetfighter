$(document).ready(function() {
	// $('#ready').hide();
	// $('#cool').hide();
	// $('#throw').hide();
	$('#fighter-box').mouseenter(function() {
		$('#still').hide();
		$('#ready').show();
	})
	    .mouseleave(function() {
        	$('#ready').hide();
        	$('#still').show();
     })
	    .mousedown(function() {
	    	$('#ready').hide();
	    	$('#throw').show();
	    	$('#hadouken').finish().show().animate(
  				{'left': '65em'},
  				500,
  				function() {
    			$(this).hide();
    			$(this).css('left', '30em');
  				}
  				);
	    	// yell hadouken
	    	// hadouken move
	 })
	    .mouseup(function() {
	    	$('#throw').hide();
	    	// $('#hadouken').hide();
	    	$('#ready').show();

	 });
});