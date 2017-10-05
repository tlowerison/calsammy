app.controller("RushCtrl", function($scope) {
	$scope.block_resize = function() {
		if ($(window).width() < 975 && $scope.size == 'md') {
			$scope.size = 'sm';
			$('.parallax-block').removeClass('parallax-block-md');
			$('.parallax-block').addClass('parallax-block-sm');
		} else if ($(window).width() >= 975 && $scope.size == 'sm') {
			$scope.size = 'md';
			$('.parallax-block').removeClass('parallax-block-sm');
			$('.parallax-block').addClass('parallax-block-md');
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
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1200, function(){
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		}
	});

	$scope.init = function() {
		loadFirstVisit();
		$scope.size = $(window).width < 975 ? 'sm' : 'md';
		if ($scope.size == 'sm') {
			$('.parallax-block').addClass('parallax-block-sm');
		} else {
			$('.parallax-block').addClass('parallax-block-md');
		}
		$(window).on('resize', $scope.block_resize);
	};
});
