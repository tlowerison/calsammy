var app = angular.module("MyApp", ["ngRoute"]);

app
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("");

	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html"
	})
	.when("/brothers", {
		templateUrl: "partials/brothers.html"
	})
	.when("/activities", {
		templateUrl: "partials/activities.html"
	})
	.when("/creed", {
		templateUrl: "partials/creed.html"
	})
	.when("/rush", {
		templateUrl: "partials/rush.html"
	})
	.otherwise({
		templateUrl: "partials/404.html"
	});
});

firstVisit = 0;