'use strict';
angular.module('userController',['userData'])
.controller('userController',function(UserInfo, $scope,$route,$stateParams,$rootScope,$routeParams) {
	self = this;
    var selectedUser = $stateParams.userId; 
    // Grab all the items from Users Service
    UserInfo.all()
    .then(function(data){
        self.userInfo = data.data.list[selectedUser];
    },function(data){
        console.log("Error occurred! " + data); 
    });
});

