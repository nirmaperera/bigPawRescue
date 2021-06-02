const searchForPet = function (search) {
	return function (x) {
		return x.title.toLowerCase().includes(search.toLowerCase()) ||
			x.description.toLowerCase().includes(search.toLowerCase()) || !search;
	}
}

export default searchForPet;
