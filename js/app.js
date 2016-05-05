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
	    	$('#hadouken').show();
	    	// yell hadouken
	    	// hadouken move
	 })
	    .mouseup(function() {
	    	$('#throw').hide();
	    	$('#hadouken').hide();
	    	$('#ready').show();

	 });
});