app.controller("HeaderCtrl", function($scope, $http) {
	
	$scope.onHeaderLinkClick = function(href) {
		$('#links').collapse('toggle');
		$(".navbar-toggle").toggleClass("active");
		var slash = window.location.href.lastIndexOf('/');
		var newhref = window.location.href.slice(0, slash > 0 ? slash : window.location.href.length) + href;
		window.location.href = newhref;
	}
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
});
