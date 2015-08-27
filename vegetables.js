var Sandwich = (function(veggies) {
  var vegOptions = {
  	"spinach": ".50",
  	"lettuce": ".35",
  	"onions": ".10",
  	"tomato": ".10",
  	"bell peppers": ".20"
  }

  veggies.prototype.getVeg = function(type) {
  	var veggiePick = type.split(" ");
  	var newVeggie = [];
  	for (var j = 0; j < veggiePick.legnth; j++)
  	  newVeggie.push(vegOptions[veggiePick[j]])
  }
  return veggies
}(Sandwich))