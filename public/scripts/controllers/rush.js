app.controller("RushCtrl", function($scope, dataFactory) {
	// Add smooth scrolling to all links
	$('.down-arrow').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(links[this.id][0]).offset().top - links[this.id][1]
			}, 1200);
			if (this.id == 'down-link-1') {
				$(this).fadeOut(250);
			}
		}
	});

	var promise = dataFactory.get("rush")

	$scope.init = function() {
		promise.then(function(res) {
			$scope.$apply(function() {
				var doc = res.data[0];
				for (var i in doc.images)
					$("#parallax" + i.toString()).css("background-image", "url(\"https://drive.google.com/uc?export=view&id=" + doc.images[i] + "\")");
				for (var i in doc.panels)
					for (var j in doc.panels[i])
						$("#block" + i.toString()).append(doc.panels[i][j]);
			})

			$(document).ready(loadFirstVisit);
		});
	};
});
