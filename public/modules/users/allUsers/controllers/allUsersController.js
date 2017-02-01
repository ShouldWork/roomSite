'use strict'; 
angular.module('allUsersController', ['allUsersService'])
.controller('allUsersController', function(Users) {
    
    self = this;
    
    // Grab all the items from Cards Service
    Users.all()
    .then(function(data){
        self.userData = data.data;
        console.log(data)
    },function(data){
        console.log("An error occurred " + data);
    }); 

    self.goto = function(where){
        self.selectedUser = where; 
        $location.path('/peeps/userDetail');
    }
});