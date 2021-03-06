'use strict';
angular.module('loginController',['loginService'])
.controller('loginController',function(
										 simpleToast,
										 $mdSidenav,
										 $mdDialog, 
										 $scope, 
										 $rootScope
){
	self.userInfo = loginService;

    self.toggleLeft = function() {
      	$mdSidenav('left').toggle();
    }

    self.toggleRight = function() {
      	$mdSidenav('right').toggle();
    }
    $scope.userInfo = {
      	isLoggedIn: false
    };

	self.logout = function(){
        toast.showSimpleToast('Logged out successfully!');
        $mdSidenav('right').toggle(); 
        $scope.userInfo = {
          displayName: '',
          emailAddress: '',
          isLoggedIn: false
        };
      }

      self.showCreateUserDialog = function(ev) {
          $mdDialog.show({
            controller: loginDialogController,
            templateUrl: '/modules/login/view/login.view.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
          })
          .then(function(answer) {
            // console.log("user name: " + answer.displayName  + " email: " + answer.emailAddress + " password: " + answer.loginPassword);
            $scope.userInfo = {
              isLoggedIn: true, 
              displayName: answer.displayName,
              emailAddress: answer.emailAddress
            }; 
            $mdSidenav('right').toggle();
            toast.showSimpleToast('User is logged in ' + $scope.userInfo.displayName);
            console.log($scope.userInfo.isLoggedIn)
          }, function() {
            $mdSidenav('right').toggle();
            toast.showSimpleToast('No new user created!');
        });
      };


        function loginDialogController($scope, $mdDialog) {
            $scope.hide = function() {
              $mdDialog.hide();
            };

            $scope.cancel = function() {
              $mdDialog.cancel();
            };

            $scope.create = function(answer) {
              $mdDialog.hide(answer);
            };
        };
});

