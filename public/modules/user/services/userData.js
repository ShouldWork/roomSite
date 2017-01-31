angular.module('userData', [])
.factory('UserInfo', function($http) {
	
	var userFactory = {};

	// Replicate $http request returning JSON
	userFactory.all = function() {
		
		return $http.get('./modules/user/services/cards.json');

	};

	return userFactory;

});

