app.controller('MovieListCtrl', function($scope, movies, MovieFactory, $stateParams) {
	$scope.row1 = movies.results.slice(0,6);
	$scope.row2 = movies.results.slice(6,12);
	$scope.row3 = movies.results.slice(12,18);
	$scope.movie19 = movies.results[18];
	$scope.movie20 = movies.results[19];
	$scope.pages = movies.total_pages;

	var pages = [];
	var count = 0;
	for (var i = $stateParams.pageNum; i <= $scope.pages; i++) {
		if (count < 3) {
			count++;
			pages.push(i);
		};
	};

	$scope.pageBtns = pages;

});