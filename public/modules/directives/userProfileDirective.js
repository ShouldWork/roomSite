'use strict'; 

angular.module('userDirective',[])
.directive("user", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs,controller) {
            scope.username = attrs.username;
            scope.avatar = attrs.avatar;
            scope.reputation = attrs.reputation;
        },
        template: '<img ng-src="{{avatar}}" />'
    }
})
