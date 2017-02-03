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
    template: '<h3 style="display: inline">{{user | limitTo: limit }}</h3><span style="color: ghostWhite; display: inline" ng-if="user.length > 5 && short">...</span>'
  };  
});