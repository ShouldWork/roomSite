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
    template: '<h3 style="display: inline">{{userInfo.displayName | limitTo:5 }}</h3><span ng-if="userInfo.displayName.length > 5" style="display: inline">...</span>'
  };  
});