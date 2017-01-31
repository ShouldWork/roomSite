angular.module('loginService', [])
.factory('loginService', function($http) {
	var userFactory = {};

	userFactory.all = function() {
		return $http.get('./modules/login/services/user.json');
	}

	return userFactory; 
});