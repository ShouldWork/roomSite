angular.module('appCtrl', ['ngMaterial'])
.service('toastService', function($mdToast) {


    var self = this; 


    var last = {
      bottom: true,
      top: false,
      left: true,
      right: false
    };

  self.toastPosition = angular.extend({},last);

  self.getToastPosition = function() {
    sanitizePosition();

    return Object.keys(self.toastPosition)
      .filter(function(pos) { return self.toastPosition[pos]; })
      .join(' ');
  };

  function sanitizePosition() {
    var current = self.toastPosition;

    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;

    last = angular.extend({},current);
  }

  self.showSimpleToast = function(message) {
    console.log("Showing toast!");
    var pinTo = self.getToastPosition();

    $mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .position(pinTo )
        .hideDelay(3000)
    );
  };

  self.showActionToast = function(message) {
    var pinTo = self.getToastPosition();
    var toast = $mdToast.simple()
      .textContent(message)
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(pinTo);

    $mdToast.show(toast).then(function(response) {
      if ( response == 'ok' ) {
        alert('You clicked the \'UNDO\' action.');
      }
    });
  };
})

.controller('appCtrl', function($mdSidenav, $stateParams, $rootScope,$mdToast,$scope,toastService,$mdDialog) {
    self= this; 
    self.userLoggedIn = {}; 
    var toast = toastService; 
    // console.log(toastService.showSimpleToast());
    // Update title using rootscope
    self.updateTitle = function() {
        $rootScope.title = $stateParams.title;
        $rootScope.content = $stateParams.content;
    }
    // Run updateTitle on each state change
    $rootScope.$on('$stateChangeSuccess', self.updateTitle);

	  self.toggleLeft = function() {
    	$mdSidenav('left').toggle();
    }

    self.toggleRight = function() {
    	$mdSidenav('right').toggle();
    }


    self.login = function(){
        toast.showActionToast('User logging in!');
        $mdSidenav('right').toggle();
    }

    self.showLoginDialog = function(ev) {
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
        $mdSidenav('right').toggle();
        self.userLoggedIn = {
          displayName: answer.displayName,
          emailAddress: answer.emailAddress
        }
        toast.showSimpleToast('User is logged in ' + answer.displayName);
      }, function() {
        $scope.status = 'You cancelled the dialog.';
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
  }
})
