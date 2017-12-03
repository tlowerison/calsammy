app.controller("BrothersCtrl", function($scope, $http) {
	$scope.img_resize = function() {
		$('.member-pic').css('height', $('.member-pic').width());
	}

	$scope.init = function() {
		$(document).ready(loadFirstVisit);
		$scope.img_resize();
		$(window).on('resize', $scope.img_resize);
		$http.get('/brothers-data').then(function(res) {
			$scope.data = res.data;
			$scope.members = loadBrothers($scope.data);
		});
	}
});

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
