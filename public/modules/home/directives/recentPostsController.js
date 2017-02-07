angular.module('recentPostsController',[])
    .controller('recentPostsController', function($scope){
        var self = this;
        $scope.posts = [{name: 'First one', body: 'this is the body of the first'},{name: 'Second one', body: 'This is the body of the second recent post'},{name: 'Third one',body: 'Body text of the third recent post'}];
    });