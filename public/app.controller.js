angular.module('appCtrl', ['ngMaterial'])
.controller('appCtrl', function($mdSidenav, $stateParams, $rootScope,$mdToast,$scope) {

    self = this;


      var last = {
      bottom: true,
      top: false,
      left: true,
      right: false
    };

  self.toastPosition = angular.extend({},last);

  self.getToastPosition = function() {
    console.log("getting position");
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

  self.showSimpleToast = function() {
    console.log("Running simple toast function!")
    var pinTo = self.getToastPosition();

    $mdToast.show(
      $mdToast.simple()
        .textContent('Simple Toast!')
        .position(pinTo )
        .hideDelay(3000)
    );
  };

  self.showActionToast = function() {
    var pinTo = self.getToastPosition();
    var toast = $mdToast.simple()
      .textContent('Marked as read')
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

    // var last = {
    //     bottom: false,
    //     top: true,
    //     left: false,
    //     right: true
    // };

    // self.toastPosition = angular.extend({},last);

    // self.getToastPosition = function() {
    //     sanitizePosition();

    //     return object.keys(self.toastPosition)
    //         .filter(function(pos){ return self.toastPostion(pos); })
    //         .join(" ");
    // };

    // function sanitizePosition(){
    //     var current = self.toastPosition; 

    //     if ( current.bottom && last.top ) current.top = false;
    //     if ( current.top && last.bottom ) current.bottom = false;
    //     if ( current.right && last.left ) current.left = false;
    //     if ( current.left && last.right ) current.right = false;

    //     last = angular.extend({},current);
    // }

    // self.showToast = function() {
    //     var pinTo = getToastPosition();

    //     $mdToast.show(
    //         $mdToast.simple()
    //             .textContent('simple Toast!')
    //             .position(pinTo)
    //             .hideDelay(3000)
    //         );
    // };



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
        console.log('User is logging in');
        self.showSimpleToast(); 
    }
})
