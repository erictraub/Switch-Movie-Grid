app.controller('RecentlyViewedCtrl', function($scope, MovieFactory) {

	$scope.recentlyViewed1 = MovieFactory.getRecentlyViewedMovies1();
	$scope.recentlyViewed2 = MovieFactory.getRecentlyViewedMovies2();

});