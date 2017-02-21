'use strict'; 
angular.module('allUsersController', ['allUsersService','ngMaterial'])
.controller('allUsersController', function(Users,$location,$scope,$state,allUsers) {
    
    var self = this;
    

    var originatorEv;
    console.log(Users);
    // self.userData = allUsers;
    // console.log(userData);

    // Grab all the items from Cards Service
    // Users.all()
    // .then(function(data){
    //     self.userData = data.data;
    //     // console.log(data)
    // },function(data){
    //     console.log("An error occurred " + data);
    // });

    self.goto = function(where){
        $state.go('peeps.details',{userId: where});
    };

    self.openMenu = function($mdOpenMenu, ev) {
        // console.log($mdMenu); 
        originatorEv = ev; 
        $mdOpenMenu(ev);
    };
});