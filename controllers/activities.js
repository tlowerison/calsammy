app.controller("ActivitiesCtrl", function($scope) {
	$scope.activities = [
		{
			"title": "Brotherhood Trips",
			"key": "bro-trips",
			"images": [
				{
					"link": "bro-trip-1",
					"class": "active"
				},
				{
					"link": "bro-trip-2",
					"class": ""
				},
				{
					"link": "bro-trip-3",
					"class": ""
				},
				{
					"link": "bro-trip-4",
					"class": ""
				},
				{
					"link": "bro-trip-5",
					"class": ""
				},
				{
					"link": "bro-trip-6",
					"class": ""
				},
				{
					"link": "bro-trip-7",
					"class": ""
				},
			]
		},
		{
			"title": "Hotel Garuda After Party",
			"key": "hotel-garuda",
			"images": [
				{
					link: "hotel-garuda-1",
					class: "active"
				},
				{
					link: "hotel-garuda-2",
					class: ""
				},
				{
					link: "hotel-garuda-3",
					class: ""
				},
				{
					link: "hotel-garuda-4",
					class: ""
				}
			]
		},
		{
			"title": "Fratsgiving",
			"key": "fratsgiving",
			"images": [
				{
					link: "fratsgiving-1",
					class: "active"
				},
				{
					link: "fratsgiving-2",
					class: ""
				},
				{
					link: "fratsgiving-3",
					class: ""
				},
				{
					link: "fratsgiving-4",
					class: ""
				},
			]
		},
		{
			"title": "Senior Sendoff 2017",
			"key": "senior-sendoff",
			"images": [
				{
					"link": "senior-sendoff-1",
					"class": "active"
				},
				{
					"link": "senior-sendoff-2",
					"class": ""
				},
				{
					"link": "senior-sendoff-3",
					"class": ""
				},
				{
					"link": "senior-sendoff-4",
					"class": ""
				},
				{
					"link": "senior-sendoff-5",
					"class": ""
				},
				{
					"link": "senior-sendoff-6",
					"class": ""
				},
				{
					"link": "senior-sendoff-7",
					"class": ""
				},
				{
					"link": "senior-sendoff-8",
					"class": ""
				},
				{
					"link": "senior-sendoff-9",
					"class": ""
				},
			]
		},
		{
			"title": "Assorted",
			"key": "assorted",
			"images": [
				{
					"link": "assorted-1",
					"class": "active"
				},
				{
					"link": "assorted-2",
					"class": ""
				},
				{
					"link": "assorted-3",
					"class": ""
				},
				{
					"link": "assorted-4",
					"class": ""
				},
				{
					"link": "assorted-5",
					"class": ""
				},
				{
					"link": "assorted-6",
					"class": ""
				},
				{
					"link": "assorted-7",
					"class": ""
				},
				{
					"link": "assorted-8",
					"class": ""
				},
				{
					"link": "assorted-9",
					"class": ""
				},
			]
		}
	];

	$scope.size = $(window).width < 768 ? 'small' : 'large';

	$scope.img_resize = function() {
		var div = $('.dynamic-height');
		if ($(window).width() < 768 && $scope.size == 'large') {
			div.css('height', '50vh');
			div.css('margin-left', '2vh');
			div.css('margin-right', '2vh');
			$scope.size = 'small';
		} else if ($(window).width() >= 768 && $scope.size == 'small') {
			div.css('height', '70vh');
			div.css('margin-left', '10vh');
			div.css('margin-right', '10vh');
			$scope.size = 'large';
		}
	}

	$scope.init = function() {
		$scope.img_resize();
		$(window).on('resize', $scope.img_resize);
		$('.carousel').carousel({
			interval: false
		});

		loadFirstVisit();
	};
});
