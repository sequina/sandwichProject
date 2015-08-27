var Sandwich = (function () {
	var cheeseOpts = {
		"provolone":"1.00"
		"american":"1.50"
		"swiss":"2.00"	

	},

	var condiments = {
		"mustard":".50"
		"ketchup":".70"
		"no condiments":"0.00"
	},
		
	var meatOpts = {
		"chicken":"3.00"
		"turkey":"4.00"
	}
	


	};

	return {
		getcheeseOpts: function() {
			return cheeseOpts;
		},

		getcondiments: function() {
			return meatOpts;
		}


		
				
	} 




})