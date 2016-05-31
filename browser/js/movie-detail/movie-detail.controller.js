app.controller('MovieDetailCtrl', function($scope, movie, nextMovie, $state, moviesForPage, $stateParams, MovieFactory) {
	$scope.movie = movie;
	$scope.nextMovie = nextMovie;
	$scope.movies = moviesForPage.results;


	$scope.next = function() {
		if ($scope.nextMovie !== 0) {
			$state.go('movieDetail', {movieId: $scope.movies[$scope.nextMovie].id, pageNum: $stateParams.pageNum})
		} else {
			MovieFactory.fetchByPage(Number($stateParams.pageNum) + 1)
			.then(function(response) {
				return response.results;
			})
			.then(function(movies) {
				$state.go('movieDetail', { movieId: movies[0].id, pageNum: Number($stateParams.pageNum) + 1 });
			})
		}
	};

});