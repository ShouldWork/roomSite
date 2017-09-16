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
            template: `
                <div class="popupDialogue" layout="column" layout-align="center center">
                    <md-input-container layout-padding>
                        <input class="inputTitle" type="text" ng-model="newFormEntry.title" placeholder="Title..." />
                    </md-input-container>
                    <md-input-container">
                        <textarea style="background: transparent; color: white; border-color: white;" type="text" placeholder="Say something already..." ng-model="newFormEntry.body"></textarea>
                    </md-input-container>
                    <div layout="row" layout-align="center center" class="dialogueButtonBox">
                        <md-button ng-click="create(newFormEntry)" class="md-button md-primary">Post</md-button>
                        <md-button ng-click="cancel()" class="md-button md-warn">Cancel</md-button>
                    </div>
                </div>`,
            parent: angular.element(document.bodystyle),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
          })
          .then(function(answer) {
            $scope.newEntryData = {
                newEntryForm:{
                    title: answer.title,
                    body: answer.body,
                    author: answer.author
                },
                toastBox: {
                    message: answer.body,
                    title: answer.title,
                    delay: 4000,
                    position: 'bottom left',
                    class: 'success',
                }
            };
            vm.posts.push($scope.newEntryData.newEntryForm);
            toast.showSimpleToast($scope.newEntryData.toastBox);
          }, function(){
            $scope.newEntryData = {
                toastBox: {
                    message: 'The post was cancelled!',
                    title: 'Cancelled',
                    delay: 6000,
                    position: 'bottom left',
                    class: 'error'
                }
            }
            toast.showSimpleToast($scope.newEntryData.toastBox);
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