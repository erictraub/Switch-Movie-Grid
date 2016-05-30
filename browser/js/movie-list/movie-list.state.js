app.config(function ($stateProvider) {
    $stateProvider.state('movieList', {
        url: '/movies/:pageNum',
        templateUrl: '/js/movie-list/movie-list.template.html',
        controller: 'MovieListCtrl',
        resolve: {
        	movies: function(MovieFactory, $stateParams) {
        		return MovieFactory.fetchByPage($stateParams.pageNum)
        		.then(function(data) {
        			data.results.forEach(function(movie) {
        				if (!movie.poster_path) movie.image = 'https://www.utopolis.lu/bundles/utopoliscommon/images/movies/movie-placeholder.jpg';
        				else movie.image = 'http://image.tmdb.org/t/p/w342' + movie.poster_path;
        			});
        			return data;
        		})
        	}
        }
    });
});