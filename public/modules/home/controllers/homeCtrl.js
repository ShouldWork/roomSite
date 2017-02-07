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

	self.posts= {
	    recent: [
            {
                name: 'First one',
                body: 'this is the body of the first'
            },
            {
                name: 'Second one',
                body: 'This is the body of the second recent post'
            },
            {
                name: 'Third one',
                body: 'Body text of the third recent post'
            }]
    };
});