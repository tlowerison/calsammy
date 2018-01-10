app.controller("ActivitiesCtrl", function($scope, $http, dataFactory) {
	var promise = dataFactory.get("activities");
	$scope.init = function() {
		promise.then(function(res) {
			$scope.$apply(function() { $scope.activities = res.data; });
			$(document).ready(loadFirstVisit);
			$('.carousel').carousel({
				interval: false
			});
		});
	};
});
