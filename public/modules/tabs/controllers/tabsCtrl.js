angular.module('tabsCtrl', ['tabsService','postService'])
.controller('tabsCtrl', function(Tabs, Posts, $mdDialog,$scope, toastService) {
	
	vm = this;

    var toast = toastService; 
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
        //     <md-input-container class="md-block">
        //   <label>Biography</label>
        //   <textarea ng-model="user.biography" md-maxlength="150" rows="5" md-select-on-focus></textare<a>
        // </md-input-container>
     vm.showNewFormDialogue = function(ev) {
        console.log('Clicked the button');
          $mdDialog.show({
            controller: newFormDialogue,
            template: '<div layout-padding layout="column" layout-align="center center"></md-input-container><md-input-container style="align-self: flex-start"> <input type="text" ng-model="newFormEntry.title" placeholder="Title..." /> </md-input-container><md-input-container style="min-width: 250px" class="md-block"><label>Post Body..</label><textarea ng-model="newFormEntry.body" rows="4" md-select-on-focus></textarea></md-input-container></div><div stlyle="align-self: flex-end" layout="row" layout-align="center center"><md-button ng-click="create(newFormEntry)" class="md-button md-primary">Post</md-button><md-button ng-click="cancel()" class="md-button md-warn">Cancel</md-button>' ,
            parent: angular.element(document.bodystyle),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
          })
          .then(function(answer) {
            // console.log("user name: " + answer.displayName  + " email: " + answer.emailAddress + " password: " + answer.loginPassword);
            $scope.newFormEntry = {
                title: answer.title,
                body: answer.body,
                author: answer.author
            }
            vm.posts.push($scope.newFormEntry);
            console.log(vm.posts);
            toast.showSimpleToast($scope.newFormEntry.title+' -- Posted!');
          }, function(){
            toast.showSimpleToast('Post abandoned!');
        });
      };

      function newFormDialogue($scope, $mdDialog){
            $scope.hide = function() {
              $mdDialog.hide();
            };

            $scope.cancel = function() {
              $mdDialog.cancel();
            };

            $scope.create = function(answer) {
              $mdDialog.hide(answer);
            };
     };

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