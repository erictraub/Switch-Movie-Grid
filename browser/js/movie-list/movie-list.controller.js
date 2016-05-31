app.controller('MovieListCtrl', function($scope, movies, MovieFactory, $stateParams) {
	$scope.row1 = movies.results.slice(0,6);
	$scope.row2 = movies.results.slice(6,12);
	$scope.row3 = movies.results.slice(12,18);
	$scope.movie19 = movies.results[18];
	$scope.movie20 = movies.results[19];
	$scope.pages = movies.total_pages;
	$scope.currentPage = Number($stateParams.pageNum);

	var pages = [];
	var count = 0;
	
	for (var i = $stateParams.pageNum; i <= $scope.pages; i++) {
		if (count < 3) {
			count++;
			pages.push(i);
		};
	};

	$scope.pageBtns = pages;

	// $( ".row" ).delegate( "img", "click", function() {
	// 	  console.log('RAN')
	// 	  $('.col-md-2').css({width: '4000px'})
	// 	  $(this).css("z-index", 30);
	// 	  $(this).animate({ width: '2000px'}, 500);
	// });

});