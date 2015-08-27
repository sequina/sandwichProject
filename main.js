document.ready


	var finalPrice = 0;

	$("#button").click(function() {
		var veggieChosen = $("#veggie-chosen").val();
		var veggiePrice = Sandwich.getVeg(veggieChosen);
		finalPrice += parseInt(veggiePrice);
	})