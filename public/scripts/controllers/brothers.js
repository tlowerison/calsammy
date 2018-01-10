app.controller("BrothersCtrl", function($scope, dataFactory) {
	var promise = dataFactory.get("brothers");

	$scope.init = function() {
		promise.then(function(res) {
			$scope.$apply(function() {
				$scope.data = res.data;
				$scope.members = loadBrothers($scope.data);
			});
			$(document).ready(loadFirstVisit);
			img_resize();
			$(window).on('resize', img_resize);
		});
	}
});
