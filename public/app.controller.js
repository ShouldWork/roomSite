angular.module('appCtrl', ['ngMaterial'])
.controller('appCtrl', function($mdSidenav,$state, $stateParams, $rootScope,$mdToast,$scope,toastService,$mdDialog,loginService) {
      self= this; 
      self.isLoggedIn = {};
      self.userInfo = {
        displayName: '',
        emailAddress: ''
      };
      var toast = toastService; 
      // console.log(toastService.showSimpleToast());
      // Update title using rootscope
      self.updateTitle = function() {
            // $rootScope.title = $stateParams.title;
            // $rootScope.content = $stateParams.content;
      }
        // Run updateTitle on each state change
      $rootScope.$on('$stateChangeSuccess', self.updateTitle);      

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
        loginService.userInfo = {}; 
        $scope.userInfo = loginService.userInfo; 
        $state.go('open'); 
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
            loginService.userInfo = {
              isLoggedIn: true, 
              displayName: answer.displayName,
              emailAddress: answer.emailAddress
            }; 
            $scope.userInfo = loginService.userInfo;
            var toastMsg = {
              message: 'Welcome to RoomSite, ' + answer.displayName + '!',
              title: 'Welcome',
              class: 'success',
            }
            toast.showSimpleToast(toastMsg);
            $mdSidenav('right').toggle();
            console.log('showing toast: ' + toastMsg.message + "!" )
          }, function() {
            var toastMsg = {
              message: 'User creation cancelled!',
              class: 'error',
              title: 'Cancelled'
            }
            $mdSidenav('right').toggle();
            toast.showSimpleToast(toastMsg);
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
})
.directive('animateOnLoad',['$animateCss', function($animateCss) {
  return {
    'link': function(scope, element) {
      $animateCss(element, {
          'event': 'enter',
           structural: true
      }).start();
    }
  };
}]);
