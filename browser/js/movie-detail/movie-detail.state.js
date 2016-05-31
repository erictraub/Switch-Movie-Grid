app.config(function ($stateProvider) {
    $stateProvider.state('movieDetail', {
        url: '/movieDetail/:movieId/:pageNum',
        templateUrl: '/js/movie-detail/movie-detail.template.html',
        controller: 'MovieDetailCtrl',
        resolve: {
        	movie: function(MovieFactory, $stateParams) {
        		return MovieFactory.getById($stateParams.movieId);
        	},
            nextMovie: function(MovieFactory, $stateParams) {
                var page;
                return MovieFactory.fetchByPage($stateParams.pageNum)
                .then(function(response) {
                    if(Number($stateParams.movieId) === response.results[response.results.length-1].id) {
                        return MovieFactory.fetchByPage($stateParams.pageNum + 1)
                    }
                    else {
                        return response;
                    }
                })
                .then(function(response) {
                    return response.results;
                })
                .then(function(movies) {
                    var index;
                    var found = false;
                    for (var i = 0; i < movies.length; i++) {
                        if (Number($stateParams.movieId) === movies[i].id) {
                            found = true;
                            index = i + 1;
                        }
                    }
                    if (found === false) index = 0;
                    return index;
                })
            },
            moviesForPage: function(MovieFactory, $stateParams) {
                return MovieFactory.fetchByPage($stateParams.pageNum);
            }
        }
    });
});