app.factory('MovieFactory', function($http) {
	var MovieFactory = {};

	var recentlyViewedCache = [];

	// var totalPages = 0;

	MovieFactory.fetchByPage = function(pageNumber) {
		return $http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=' + pageNumber)
		.then(function(movies) {
			return movies.data;
		});
	};

	MovieFactory.getById = function(movieId) {
		return $http.get('http://api.themoviedb.org/3/movie/' + movieId + '?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
		.then(function (response) {
			return response.data;
		})
		.then(function(movie) {
			if (!movie.poster_path) movie.image = 'https://www.utopolis.lu/bundles/utopoliscommon/images/movies/movie-placeholder.jpg';
			else movie.image = 'http://image.tmdb.org/t/p/w342' + movie.poster_path;

			for (var i = 0; i < recentlyViewedCache.length; i++) {
				if (Number(recentlyViewedCache[i].id) === Number(movie.id)) {
					recentlyViewedCache.splice(i,1);
				}
			};


			recentlyViewedCache.unshift(movie);
			return movie;
		});
	};

	MovieFactory.getRecentlyViewedMovies1 = function() {
		if (recentlyViewedCache.length > 12) recentlyViewedCache.splice(12);
		
		var movies = [];
		for(var i = 0; i < 6; i++) {
			if (recentlyViewedCache[i]) {
				movies.push(recentlyViewedCache[i]);
			}
		}

		return movies;
	};

	MovieFactory.getRecentlyViewedMovies2 = function() {
		if (recentlyViewedCache.length > 12) recentlyViewedCache.splice(12);
		
		var movies = [];
		for(var i = 6; i < 12; i++) {
			if (recentlyViewedCache[i]) {
				movies.push(recentlyViewedCache[i]);
			}
		}

		return movies;
	};





	return MovieFactory;
});