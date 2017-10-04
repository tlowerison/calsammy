app.controller("HeaderCtrl", function($scope, $http, brotherService) {
	$('.header-link').on('click', function() {
		$('#links').collapse('toggle');
		$(".navbar-toggle").toggleClass("active");
		$http({
			method: 'GET',
			url: $(this).attr('href')
		}).then(function(res) {
			brotherService.add(res.data);
		});
	});
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
});
