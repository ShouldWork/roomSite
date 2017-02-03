angular.module('userData', [])
.factory('UserInfo', function($http) {
	
	var userFactory = {};
	var selectedUser = 0; 
	

	// Replicate $http request returning JSON
	userFactory.all = function() {
		
		return $http.get('./modules/users/allUsers/services/users.json');

	};

	return userFactory;

});

