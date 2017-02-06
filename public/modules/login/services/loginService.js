angular.module('loginService', [])
.factory('loginService', function($http) {
	var user = {
		userInfo: {
			isLoggedIn: true
		}
	}
	return user;
});