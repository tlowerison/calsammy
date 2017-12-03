app.controller("ActivitiesCtrl", function($scope, $http) {
	var promise = new Promise(function(resolve) {
		$http.get('/activities-data').then(function(res) {
			$scope.activities = res.data;
			resolve();
		});
	});

	$scope.init = function() {
		promise.then(function() {
			$(document).ready(loadFirstVisit);
			$('.carousel').carousel({
				interval: false
			});
		});
	};
});
