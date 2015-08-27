var Sandwich = (function(veggies) {
  var vegOptions = {
  	"spinach": ".50",
  	"lettuce": ".35",
  	"onions": ".10",
  	"tomato": ".10",
  	"bell peppers": ".20"
  }

  veggies.prototype.getVeg = function(type) {
  	return vegOptions[type];
  }
  return veggies

}(Sandwich))