app.controller("RushCtrl", function($scope) {
	// Add smooth scrolling to all links
	$('.down-arrow').on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			$('html, body').animate({
				scrollTop: $(links[this.id][0]).offset().top - links[this.id][1]
			}, 1200, function(){
				// Add hash (#) to URL when done scrolling (default click behavior)
				// window.location.hash = hash;
			});
			if(this.id == 'down-link-1') {
				$(this).fadeOut(250);
			}
		}
	});

	$scope.init = function() {
		$(document).ready(loadFirstVisit);
	};
});

var links = {
	'down-link-1': ['#block1', 110],
	'down-link-2': ['#block2', 65],
	'down-link-3': ['#block3', 65]
}