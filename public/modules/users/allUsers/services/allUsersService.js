angular.module('allUsersService', [])
.factory('Users', function($http) {
	
	var usersFactory = {};

	// Replicate $http request returning JSON
	usersFactory.all = function() {
		
		return $http.get('./modules/users/allUsers/services/users.json');

	};

	return usersFactory;

});