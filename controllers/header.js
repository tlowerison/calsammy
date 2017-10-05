app.controller("HeaderCtrl", function($scope, $http) {
	$('.header-link').on('click', function() {
		$('#links').collapse('toggle');
		$(".navbar-toggle").toggleClass("active");
	});
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
});
