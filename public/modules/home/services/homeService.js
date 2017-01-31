angular.module('homeService', [])
.factory('Pages', function($http) {
	
	var pagesFactory = {};

	// Replicate $http request returning JSON
	pagesFactory.all = function() {
		
		return $http.get('./modules/home/services/homeData.json');

	};

	return pagesFactory;

});