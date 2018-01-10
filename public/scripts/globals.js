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
// Device type
var device = "";

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	device = "mobile";
	var height = $(window).height();
	for (var key in var_heights) {
		static_heights[key] = var_heights[key][1] * height / 100;
	}
}

var loadFirstVisit = function() {
	// Mobile Device element resizing.
	if (device == "mobile") {
		$('.carousel-md').css({'height': static_heights['.carousel-md'].toString() + 'px'});
		$('.carousel-sm').css({'height': static_heights['.carousel-sm'].toString() + 'px'});
		$('.center-con').css({'height': static_heights['.center-con'].toString() + 'px'});
		$('.parallax').css({'height': static_heights['.parallax'].toString() + 'px'});
		$('.rush-title').css({'margin-bottom': static_heights['.rush-title'].toString() + 'px'});
		$('#home-crest').css({'padding-top': static_heights['#home-crest'].toString() + 'px'});
		$('#s-a-n').css({'margin-top': static_heights['#s-a-n'].toString() + 'px'});
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

var links = {
	'down-link-1': ['#block0', 110],
	'down-link-2': ['#block1', 65],
	'down-link-3': ['#block2', 65]
}

function img_resize() {
	$('.member-pic').css('height', $('.member-pic').width());
}

function loadBrothers(data) {
	var members = [
		{
			"type": "Council",
			"members": []
		},
		{
			"type": "Chairholders",
			"members": []
		},
		{
			"type": "Actives",
			"members": []
		}
	];
	var type = 0;
	for (var i = data.length - 1; i >= 0; i--) {
		if (groups["Council"].indexOf(data[i].position) >= 0) {
			type = 0;
		} else if (groups["Chairholders"].indexOf(data[i].position) >= 0) {
			type = 1;
		} else {
			type = 2;
		}
		members[type].members.unshift(data[i]);
	}
	return members;
}

var groups = {
	"Council": [
		"Prior",
		"Vice Prior",
		"Exchequer",
		"Recorder"
	],
	"Chairholders": [
		"Rush Chairman",
		"Candidate Educator",
		"Brotherhood Chairman",
		"Social Chairman",
		"Alumni Relations Chairman",
		"House Manager",
		"Philanthropy Chairman",
		"Scholarship Chairman"
	]
}
