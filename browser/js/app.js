var app = angular.module('SwitchMovieGrid', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
	// take hashtags out of url
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/movies/1');
});