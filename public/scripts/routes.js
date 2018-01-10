var app = angular.module("MyApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("");

	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "HomeCtrl"
	})
	.when("/brothers", {
		templateUrl: "partials/brothers.html",
		controller: "BrothersCtrl"
	})
	.when("/activities", {
		templateUrl: "partials/activities.html",
		controller: "ActivitiesCtrl"
	})
	.when("/creed", {
		templateUrl: "partials/creed.html",
		controller: "CreedCtrl"
	})
	.when("/rush", {
		templateUrl: "partials/rush.html",
		controller: "RushCtrl"
	})
	.otherwise({
		templateUrl: "partials/404.html"
	});
});
