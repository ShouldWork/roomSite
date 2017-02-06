angular.module('loginService', [])
.factory('loginService', function($http) {
	var userInfo = {isLoggedIn: true}; 

	// userInfo.all = function() {
	// 	return userInfo;
	// }

	return userInfo;
});