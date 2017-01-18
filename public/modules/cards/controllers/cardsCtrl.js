angular.module('cardsCtrl', ['cardsService'])
.controller('cardsCtrl', function(Cards) {
	
	self = this;
	
	// Grab all the items from Cards Service
	Cards.all()
    .then(function(data){
        self.cardItems = data.data;
    },function(data){
        console.log("An error occurred " + data);
    }); 
});