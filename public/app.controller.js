angular.module('appCtrl', ['ngMaterial'])
.controller('appCtrl', function($mdSidenav, $stateParams, $rootScope,$mdToast,$scope,toastService,$mdDialog) {
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
})


