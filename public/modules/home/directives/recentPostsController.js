angular.module('recentPostsController',[])
    .controller('recentPostsController', function($scope){
        var self = this;
        $scope.posts = [{
        	title: 'First one',
        	body: 'this is the body of the first',
        	author: "Blake Locke"
        },
        {
        	title: 'Second one', 
        	body: 'This is the body of the second recent post',
        	author: "Blake Locke"
        },
        {
        	title: 'Third one',
        	body: 'Body text of the third recent post',
        	author: "Blake Locke"
        }];
    });