app.controller('HomeCtrl', function($scope, $http) {
	$scope.images = [
		{
			index: 0,
			key: '0B23ZW2d0WWSrdVdjM3o0Vi1POEk',
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

	$scope.init = function() {
		$(document).ready(loadFirstVisit());
		$('.carousel').carousel({
			interval: 4000
		});
		$('.carousel').removeClass('carousel-sm');
		$('.carousel').removeClass('carousel-md');
	};
});
