angular.module('tabsCtrl', ['tabsService'])
.controller('tabsCtrl', function(Tabs) {
	
	self = this;


	// Grab all the items from Tabs Service
	Tabs.all()
    .then(function(data){
        console.log(data);
        self.tabItems = data.data; 
    }, function(data){
        console.log("Error occurred! " + data)
    });
});