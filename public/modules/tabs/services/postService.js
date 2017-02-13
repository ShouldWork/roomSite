angular.module('postService', [])
.factory('Posts', function($http) {
	
	var postsFactory = {};

	// Replicate $http request returning JSON
	postsFactory.all = function() {
		
		return $http.get('./modules/tabs/services/posts.json');

	};

	return postsFactory;

});