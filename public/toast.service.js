angular.module('toastService',[])
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