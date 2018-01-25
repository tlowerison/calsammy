app.factory("dataFactory", function($http) {
	var pageData = {};

	return {
		get: function(page) {
			return new Promise(function(resolve) {
				if (pageData[page] != undefined) resolve(Object.assign({}, pageData[page]));
				else {
					$http.get("/" + page + "-data").then(function(res) {
						pageData[page] = res;
						resolve(pageData[page]);
					})
				}
			});
		}
	}
});
