app.controller("ActivitiesCtrl", function($scope, $http, dataFactory) {
	var promise = dataFactory.get("activities");
	$scope.init = function() {
		promise.then(function(res) {
			$scope.$apply(function() {
				$scope.activities = res.data.map(function(a, i) {
					a.images = a.images.map(function(img, j) {
						return {class: img.class, url: (img.url || "https://drive.google.com/a/berkeley.edu/uc?export=view&id=" + img.key), index: j};
					})
					a.index = i
					return a
				})
			});

			var unloadedActivities = [];
			var nextActives = [];
			var activityDir = [];
			for (var i = 1; i < $scope.activities.length; i += 1) {
				function foo(j) { 
					unloadedActivities.push(i)
					nextActives.push(1)
					activityDir.push("right")
				}
				foo(i)
			}
			nextActives.push(1)
			activityDir.push("right")

			$(document).ready(function() {
				$("#" + $scope.activities[0].key + "-item-0").css("background-image", "url('" + $scope.activities[0].images[0].url + "')");
				$("#" + $scope.activities[0].key + "-item-0").css("background-size", "cover")
				$("#" + $scope.activities[0].key + "-item-0").css("background-position", "50% 15%")
				setTimeout(function() {
					$("#" + $scope.activities[0].key + "-item-1").css("background-image", "url('" + $scope.activities[0].images[1].url + "')");
					$("#" + $scope.activities[0].key + "-item-1").css("background-size", "cover")
					$("#" + $scope.activities[0].key + "-item-1").css("background-position", "50% 15%")
					var last = $scope.activities[0].images.length - 1;
					$("#" + $scope.activities[0].key + "-item-" + last.toString()).css("background-image", "url('" + $scope.activities[0].images[last].url + "')");
					$("#" + $scope.activities[0].key + "-item-" + last.toString()).css("background-size", "cover")
					$("#" + $scope.activities[0].key + "-item-" + last.toString()).css("background-position", "50% 15%")
				}, 2000);

				function carouselControl(ev) {
					var id = $(ev.target).attr("id");
					if (id == undefined)
						id = $(ev.target).parent().attr("id")
					var activityIndex = id.slice(id.lastIndexOf("-") + 1, id.length);
					if ($(ev.target).hasClass("right")) {
						if (activityDir[activityIndex] == "right")
							nextActives[activityIndex] = (nextActives[activityIndex] + 1) % $scope.activities[activityIndex].images.length;
						else
							nextActives[activityIndex] = (nextActives[activityIndex] + 3) % $scope.activities[activityIndex].images.length;
						activityDir[activityIndex] = "right"
					} else {
						if (activityDir[activityIndex] == "left")
							nextActives[activityIndex] = (nextActives[activityIndex] + $scope.activities[activityIndex].images.length - 1) % $scope.activities[activityIndex].images.length;
						else
							nextActives[activityIndex] = (nextActives[activityIndex] + $scope.activities[activityIndex].images.length - 3) % $scope.activities[activityIndex].images.length;
						activityDir[activityIndex] = "left"
					}
					$("#" + $scope.activities[activityIndex].key + "-item-" + nextActives[activityIndex].toString()).css("background-size", "cover")
					$("#" + $scope.activities[activityIndex].key + "-item-" + nextActives[activityIndex].toString()).css("background-position", "50% 15%")
					$("#" + $scope.activities[activityIndex].key + "-item-" + nextActives[activityIndex].toString()).css("background-image", "url('" + $scope.activities[activityIndex].images[nextActives[activityIndex]].url + "')");
				}

				$(".carousel-control").on("click", carouselControl)
			})
			
			$(window).on("resize scroll", function() {
				for (var i in $scope.activities) {
					function bar(j) {
						if($("#" + $scope.activities[j].key + "-item-0").isInViewport() && unloadedActivities.includes(parseInt(j))) {
							unloadedActivities.splice(unloadedActivities.indexOf(parseInt(j)), 1)
							$("#" + $scope.activities[j].key + "-item-0").css("background-image", "url('" + $scope.activities[j].images[0].url + "')");
							$("#" + $scope.activities[j].key + "-item-0").css("background-size", "cover")
							$("#" + $scope.activities[j].key + "-item-0").css("background-position", "50% 15%")
							setTimeout(function() {
								$("#" + $scope.activities[j].key + "-item-1").css("background-image", "url('" + $scope.activities[j].images[1].url + "')");
								$("#" + $scope.activities[j].key + "-item-1").css("background-size", "cover")
								$("#" + $scope.activities[j].key + "-item-1").css("background-position", "50% 15%")
								var last = $scope.activities[j].images.length - 1;
								$("#" + $scope.activities[j].key + "-item-" + last.toString()).css("background-image", "url('" + $scope.activities[j].images[last].url + "')");
								$("#" + $scope.activities[j].key + "-item-" + last.toString()).css("background-size", "cover")
								$("#" + $scope.activities[j].key + "-item-" + last.toString()).css("background-position", "50% 15%")
							}, 2000);
						}
					}
					bar(i)
				}
			})

			$(document).ready(loadFirstVisit);

			$('.carousel').carousel({
				interval: false
			});
		});
	};
});
