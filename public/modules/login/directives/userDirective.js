angular.module('userInfoWidget', [])
.directive("user", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs,controller) {
            username = '=username',
            emailAddress = '=emailAddress'
        },
        controller: 'loginController',
        template: '<div>Username: {{username}}<img ng-src="{{avatar}}" /></div>'
        // templateUrl: 'modules/users/view/usersView.html'
    }
})
.directive('userLoggedin', function() {
  return {
    restrict: 'EA',
    scope: {
        limit: '=limit',
        short: '=short',
        user: '=user'
    },
    template: '<h3 style="color: ghostWhite;display: inline">{{ user | limitTo: limit }}</h3><span style="color: ghostWhite; display: inline" ng-if="user.length > 5 && short">...</span>'
  }
})
.directive('recentPosts', function() {
    return {
        restrict: 'E',
        templateUrl: 'modules/posts/views/recentPosts.html',
        controller: 'recentPostsController',
        controllerAs: 'posts'
    }
})
.directive('userCard', function(){
   return {
       restrict: 'E',
       templateUrl:'modules/users/allUsers/directives/allUsersDirective.html',
       scope:{
           user: "@",
           goTo: "&",
           userImage:"@",
           userName: "@",
           userSocial: "@",
           menuDirection: '=',
           userId: '@'
       },
       controller: function ($scope,$state){
            var self = $scope; 
            // self.userSocial = userSocial;
            console.log(self.userSocial);
            self.isOpen = false;

            self.topDirections = ['left', 'up'];
            self.bottomDirections = ['down', 'right'];


            self.availableModes = ['md-fling', 'md-scale'];
            self.selectedMode = 'md-scale';

            self.availableDirections = ['up', 'down', 'left', 'right'];
            self.selectedDirection = 'down';

            self.goTo = function(where){
                console.log($state);
                $state.go('peeps.details',{userId: where});
          };
       }
   }
});