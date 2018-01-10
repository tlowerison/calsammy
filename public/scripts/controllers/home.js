app.controller('HomeCtrl', function($scope, dataFactory) {
	
	var promise = dataFactory.get("home");

	$scope.init = function() {
		promise.then(function(res) {
			$scope.$apply(function() {
				$scope.images = res.data[0].images.map(function(e, i) {
					return { index: i, key: e, class: i == 0 ? "active" : "" };
				});
			});
			$(document).ready(loadFirstVisit());
			$('.carousel').carousel({
				interval: 4000
			});
			$('.carousel').removeClass('carousel-sm');
			$('.carousel').removeClass('carousel-md');
		});
	}
});
