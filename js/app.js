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
     });
});