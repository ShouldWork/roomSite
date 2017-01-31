angular.module('homeCtrl', ['homeService'])
.controller('homeCtrl', function(Pages) {
	
	self = this;
	
	// Grab all the items from Cards Service
	Pages.all()
    .then(function(data){
        self.cardItems = data.data;
    },function(data){
        console.log("An error occurred " + data);
    }); 
});