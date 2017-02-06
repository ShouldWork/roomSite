'use strict'; 
angular.module('allUsersController', ['allUsersService','ngMaterial'])
.controller('allUsersController', function(Users, $location,$scope,$state,$stateParams,$routeParams,$mdDialog) {
    
    self = this;
    

    var originatorEv; 

    // Grab all the items from Cards Service
    Users.all()
    .then(function(data){
        self.userData = data.data;
        // console.log(data)
    },function(data){
        console.log("An error occurred " + data);
    }); 

    self.goto = function(where){
        $state.go('peeps.details',{userId: where});
    }

    self.openMenu = function($mdMenu, ev) {
        // console.log($mdMenu); 
        originatorEv = ev; 
        $mdMenu.open(ev);
    };
});