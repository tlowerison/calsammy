// Create new brother in database and return its id
exports.create = function(brothers, name, year, major, position, pclass, imgkey) {
	var brother = {
		"name": name,
		"year": year,
		"major": major,
		"position": position,
		"pclass": pclass,
		"imgkey": imgkey
	}

	brothers.insert(brother)
},

// Gets a particular brother by id
exports.get = function(brothers, id) {
	brothers.find({id:id}).then(function(docs) {
		return docs.toArray();
	})
},

// Get all brothers
exports.all = function(brothers) {
	brothers.find({}).then(function(docs) {
		return docs.toArray();
	})
}

exports.changePosition = function(brothers, id, position) {
	brothers.update({id:id}, {position: position})
}
