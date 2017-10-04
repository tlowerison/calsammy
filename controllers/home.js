app.controller('HomeCtrl', function($scope, $http) {
	$scope.images = [
		{
			index: 0,
			key: '0B23ZW2d0WWSrbEY5S3IzTy1xTGc',
			title: 'Slide 1',
			caption: 'This is the caption for the first slide...',
			class: 'active'
		},
		{
			index: 1,
			key: '0B23ZW2d0WWSrMDVmRU9xNkVXVlE',
			title: 'Slide 2',
			caption: 'This is the caption for the second slide...',
			class: ''
		},
		{
			index: 2,
			key: '0B23ZW2d0WWSrWmVBT19OemRNMWM',
			title: 'Slide 3',
			caption: 'This is the caption for the third slide...',
			class: ''
		},
		{
			index: 3,
			key: '0B23ZW2d0WWSrZ1FCMG5lX3NfZDQ',
			title: 'Slide 4',
			caption: 'This is the caption for the fourth slide...',
			class: ''
		},
		{
			index: 4,
			key: '0B23ZW2d0WWSrOWRQMTNGRjFmQkE',
			title: 'Slide 5',
			caption: 'This is the caption for the fifth slide...',
			class: ''
		},
		{
			index: 5,
			key: '0B23ZW2d0WWSrUUg1OHk1SlRXR2M',
			title: 'Slide 6',
			caption: 'This is the caption for the sixth slide...',
			class: ''
		},
		{
			index: 6,
			key: '0B23ZW2d0WWSrT1pWOVppZDVJeVk',
			title: 'Slide 7',
			caption: 'This is the caption for the seventh slide...',
			class: ''
		},
	];

	$scope.size = $(window).width < 768 ? 'small' : 'large';

	$scope.img_resize = function() {
		var div = $('.dynamic-height');
		if ($(window).width() < 768 && $scope.size == 'large') {
			$('#carousel-wrapper').css('background-color', '#444');

			div.animate({
				'opacity': '0.4'
			}, 400);

			$('.carousel-indicators').animate({opacity: '0'}, 400);
			$scope.size = 'small';
		} else if ($(window).width() >= 768 && $scope.size == 'small') {
			$('#carousel-wrapper').css('background-color', '#fff');

			div.animate({
				'opacity': '1'
			}, 400);

			$('.carousel-indicators').animate({opacity: '1'}, 400);
			$scope.size = 'large';
		}
	}

	$scope.init = function() {
		$scope.img_resize();

		$(window).on('resize', $scope.img_resize);

		$('.carousel').carousel({
			interval: 3000
		});

		loadFirstVisit();
	};
});

var loadFirstVisit = function() {
	if (firstVisit == 0) {
		$('#content').animate({opacity: "1.0"}, 600, function() {
			setTimeout(function() {
				$('.navbar-header .navbar-brand').animate({opacity: "1.0"}, 600);
			}, 0);
			$('.header-link.style-link').each(function(i) {
				var link = this;
				setTimeout(function() {
					$(link).animate({top: "0px"});
				}, 75 * (i + 2));
			});
		});
		firstVisit = 1;
	} else {
		$('#content').animate({opacity: "1.0"}, 600);
	}
}

firstVisit = 0;
