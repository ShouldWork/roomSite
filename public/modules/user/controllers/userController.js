'use strict';
angular.module('userController',['userData'])
.controller('userController',function(UserInfo, $scope,$route,$stateParams,$rootScope) {
	self = this;
	console.log($stateParams.userID);
	$scope.selectedUser = $stateParams.userId || 2;
	console.log($stateParams.userID);
	$scope.selectedUser = 1;
	// Grab all the items from Users Service
	UserInfo.all()
    .then(function(data){
        self.userInfo = data.data.list;
        console.log(self.userInfo[0].name)
    },function(data){
        console.log("Error occurred! " + data); 
    });



});

