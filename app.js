var app = angular.module("MyApp", ["ngRoute"]);

app
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("");

	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html"
	})
	.when("/brothers", {
		templateUrl: "partials/brothers.html"
	})
	.when("/activities", {
		templateUrl: "partials/activities.html"
	})
	.when("/creed", {
		templateUrl: "partials/creed.html"
	})
	.when("/rush", {
		templateUrl: "partials/rush.html"
	})
	.otherwise({
		templateUrl: "partials/404.html"
	});
});

var firstVisit = 0;
var var_heights = {
	"body": ["margin-bottom", 5],
	".carousel-md": ["height", 60],
	".carousel-sm": ["height", 40],
	".center-con": ["height", 10],
	".parallax": ["height", 85],
	".rush-title": ["margin-bottom", 3],
	"#home-crest": ["padding-top", 15],
	"#s-a-n": ["margin-top", 2]
}
var static_heights = {
	"body": 0,
	".parallax": 0,
	".rush-title": 0,
	"#home-crest": 0,
	"#s-a-n": 0,
	".carousel-md": 0,
	".carousel-sm": 0,
	".center-con": 0
}
var device = "";

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	device = "mobile";
	var height = $(window).height();
	for (var key in var_heights) {
		static_heights[key] = var_heights[key][1] * height / 100;
	}
}

var loadFirstVisit = function() {
	if (device == "mobile") {
		//$('body').css({'margin-bottom': static_heights['body'].toString() + 'px'});
		$('.carousel-md').css({'height': static_heights['.carousel-md'].toString() + 'px'});
		$('.carousel-sm').css({'height': static_heights['.carousel-sm'].toString() + 'px'});
		$('.center-con').css({'height': static_heights['.center-con'].toString() + 'px'});
		$('.parallax').css({'height': static_heights['.parallax'].toString() + 'px'});
		$('.rush-title').css({'margin-bottom': static_heights['.rush-title'].toString() + 'px'});
		$('#home-crest').css({'padding-top': static_heights['#home-crest'].toString() + 'px'});
		$('#s-a-n').css({'margin-top': static_heights['#s-a-n'].toString() + 'px'});
		console.log(static_heights["#s-a-n"]);
	} else {
		console.log(device);
	}
	if (firstVisit == 0) {
		setTimeout(function() {
			$('.navbar-header .navbar-brand').animate({opacity: "1.0"}, 600);
		}, 0);
		$('.header-link.style-link').each(function(i) {
			var link = this;
			setTimeout(function() {
				$(link).animate({top: "0px"});
			}, 75 * (i + 2));
		});
		firstVisit = 1;
	}

	var carousel = $('.carousel');
	if (device == "mobile") {
		// home
		$('#carousel-wrapper').css('background-color', '#444');
		$('.page-title').css('font-size', '4.5rem');
		$('.carousel-indicators').animate({opacity: '0'}, 400);
		// activities
		carousel.addClass('carousel-sm');
		carousel.removeClass('carousel-md');
		$('.group-title').css({'font-size': '2.5rem'});
		// rush
		$('#down-link-2, #down-link-3').hide(0);
		$('.rush-caption').css({'font-size': '3rem'});
		$('#right-rush-sched').css({'margin-top': '0rem'});
		$('#candidates-stat, #brotherhood-stat').css({'margin-top': '15px'});
	} else {
		// home
		$('#carousel-wrapper').css('background-color', '#fff');
		$('.page-title').css('font-size', '6rem');
		$('.carousel-indicators').animate({opacity: '1'}, 400);
		// activities
		carousel.addClass('carousel-md');
		carousel.removeClass('carousel-sm');
		$('.group-title').css({'font-size': '3rem'});
		// rush		
		$('#down-link-2, #down-link-3').show(0);
		$('.rush-caption').css({'font-size': '3.5rem'});
		$('#right-rush-sched').css({'margin-top': '1.75rem'});
		$('#candidates-stat, #brotherhood-stat').css({'margin-top': '0px'});
	}
}
