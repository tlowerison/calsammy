app.controller('HomeCtrl', function($scope, dataFactory) {
	
	var promise = dataFactory.get("home");

	$scope.init = function() {
		promise.then(function(res) {
			$scope.$apply(function() {
				$scope.images = res.data[0].images.map(function(e, i) {
					return { index: i, url: "https://drive.google.com/a/berkeley.edu/uc?export=view&id=" + e, class: i == 0 ? "active" : "" };
				});
			});
			$(document).ready(loadFirstVisit());
			$(document).ready(function() {
				$("#home-item-0").css("background-image", "url('" + $scope.images[0].url + "')");
				$("#home-item-0").css("background-size", "cover")
				$("#home-item-0").css("background-position", "50% 0%")
				setTimeout(function() {
					$("#home-item-1").css("background", "url('" + $scope.images[1].url + "')");
					$("#home-item-1").css("background-size", "cover")
					$("#home-item-1").css("background-position", "50% 0%")
				}, 2000)
			})
			$('.carousel').carousel({
				interval: 4000
			});
			$('.carousel').removeClass('carousel-sm');
			$('.carousel').removeClass('carousel-md');
		});
	}
	var nextActive = 1;
	$(".carousel.lazy").on("slide.bs.carousel", function(ev) {
		var id = $(ev.relatedTarget).attr("id");
		var key = parseInt(id.slice(id.lastIndexOf("-") + 1, id.length))
		if (key != nextActive) {
			var lazy = $("#home-item-" + key.toString())
			lazy.css("background", "url('" + $scope.images[key].url + "')");
			lazy.css("background-size", "cover")
			lazy.css("background-position", "50% 0%")
			nextActive = key
		}
		nextActive = (nextActive + 1) % $scope.images.length;
		var lazy = $("#home-item-" + nextActive.toString())
		lazy.css("background", "url('" + $scope.images[nextActive].url + "')");
		lazy.css("background-size", "cover")
		lazy.css("background-position", "50% 0%")
	});
});

