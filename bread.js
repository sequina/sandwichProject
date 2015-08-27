var Sandwich = (function(bread) {
  var breadOption = {
    "wheat": "2.00",
    "rye": "1.50",
    "pumpernickel": ".75"
    "cranberry pecan": "6.00"
    "white": "1.00"
  }

  bread.prototype.getBread = function(type){
   return breadOption[type]
    }

  }

 return bread;
}(Sandwich));