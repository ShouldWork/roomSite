angular.module('tabsCtrl', ['tabsService','postService'])
.controller('tabsCtrl', function(Tabs, Posts) {
	
	vm = this;

    vm.toTest = "Something to test";

	// Grab all the items from Tabs Service
	Tabs.all()
    .then(function(data){
        vm.tabItems = data.data; 
    }, function(data){
        console.log("Error occurred! " + data)
    });

    Posts.all()
    .then(function(data){
        vm.posts = data.data.list;
    }, function(error){
        console.log("Something went wrong..." + error); 
    }); 

    vm.addPost = function (post){
        var currentPosts = vm.posts; 
        // var currentPosts.push(post);
    }

})
.directive('posts', function(){
    return {
        restrict: 'E', 
        templateUrl: 'modules/tabs/views/discussionPosts.html',
        controller: 'tabsCtrl',
        controllerAs: 'Post',
        scope:{
            postTitle: "@",
            postBody: "@",
            postAuthor: "@"
        }
    }
});