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
	    recent: [{
            title: 'First one',
            body: 'this is the body of the first',
            author: "Blake Locke"
        },
        {
            title: 'Second one', 
            body: 'This is the body of the second recent post',
            author: "Kevin Newcomb"
        },
        {
            title: 'Third one',
            body: 'Body text of the third recent post',
            author: "John Moore"
        }]
    };
});