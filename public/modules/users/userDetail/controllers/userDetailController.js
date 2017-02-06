'use strict';
angular.module('userController',['userData'])
.controller('userController',function(UserInfo,$stateParams, $state) {
	self = this;
    var selectedUser = $stateParams.userId; 
    // Grab all the items from Users Service
    self.goBack = function goBack(where){
        $state.go(where);
    };
    UserInfo.all()
    .then(function(data){
        self.userInfo = data.data.list[selectedUser];
    },function(data){
        console.log("Error occurred! " + data); 
    });

});

