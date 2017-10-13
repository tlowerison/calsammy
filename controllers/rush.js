app.controller("RushCtrl", function($scope) {
	$scope.block_resize = function() {
		if ($(window).width() < 975 && $scope.size == 'md') {
			$scope.size = 'sm';

			$('#down-link-2, #down-link-3').hide(0);
			$('.rush-caption').css({'font-size': '3rem'});
			$('#right-rush-sched').css({'margin-top': '0rem'});
			$('#candidates-stat, #brotherhood-stat').css({'margin-top': '15px'});
		} else if ($(window).width() >= 975 && $scope.size == 'sm') {
			$scope.size = 'md';

			$('#down-link-2, #down-link-3').show(0);
			$('.rush-caption').css({'font-size': '3.5rem'});
			$('#right-rush-sched').css({'margin-top': '1.75rem'});
			$('#candidates-stat, #brotherhood-stat').css({'margin-top': '0px'});
		}
	}

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
		// Give $scope.size incorrect initial value to trigger block_resize
		$scope.size = $(window).width() < 975 ? 'md' : 'sm';
		$(window).on('resize', $scope.block_resize);
		$scope.block_resize();
	};
});

var links = {
	'down-link-1': ['#block1', 110],
	'down-link-2': ['#block2', 65],
	'down-link-3': ['#block3', 65]
}