app.factory('MovieFactory', function($http) {
	var MovieFactory = {};

	MovieFactory.fetchByPage = function(pageNumber) {
		return $http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=' + pageNumber)
		.then(function(movies) {
			return movies.data;
		});
	};




	return MovieFactory;
});