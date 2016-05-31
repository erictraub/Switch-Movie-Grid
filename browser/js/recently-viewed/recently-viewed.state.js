app.config(function ($stateProvider) {
    $stateProvider.state('recentlyViewed', {
        url: '/recentlyViewed',
        templateUrl: '/js/recently-viewed/recently-viewed.template.html',
        controller: 'RecentlyViewedCtrl'
    });
});