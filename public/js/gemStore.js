"use strict";
(function () {
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('TabController', function(){
		this.tab = 1;

		this.setTab = function(newValue) {
			this.tab = newValue;
		};

		this.isSet = function(tabName) {
			return this.tab === tabName;
		};
	});

	var gems = [
		{ 
			name: 'Azurite',
			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.", 
			shine: 8,
			price: 110.50,
			images: [
				"img/gem.jpg"
			]
		},
		{ 	name: 'Bloodstone', 
			description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
			shine: 9,
			price: 22.90,
			images: [
				"img/gem.jpg"
			]
		},
		{
			name: 'Zircon',
			description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
			shine: 70,
			price: 1100, 
			images: [
				"img/gem.jpg"
			]
		}
	];

})();