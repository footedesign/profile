$(document).ready(function(){
	$('#me').click(function () {
		if ($('#map-startup').is(":hidden")) {
			$('#map-me').slideToggle();
		} else {
			$('#map-startup').slideUp();
			$('#map-me').slideToggle();
		}
	});

	$('#start').click(function () {
		if ($('#map-me').is(":hidden")) {
			$('#map-startup').slideToggle();
		} else {
			$('#map-me').slideUp();
			$('#map-startup').slideToggle();
		}
	});
});
