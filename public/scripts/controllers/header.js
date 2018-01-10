app.controller("HeaderCtrl", function() {
	$(".header-link").on("click", function() {
		$('#links').collapse('toggle');
		$(".navbar-toggle").toggleClass("active");
	});

	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
});
