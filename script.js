/*
	WEB 303 Assignment 1 - jQuery
	{Your Name:Daizy}
	Student id : 0823738
*/


$(document).ready(function() {
    //Event handler for the "change" event on the fields for salary and %

    $('#yearly-salary, #percent').on('change', function() {

        // Get the values of pay and percentage

        var pay = ($('#yearly-salary').val());
        var percentage = ($('#percent').val());

        // Calculate the amount to spend on tech
        
		var tAmount = (pay * percentage) / 100;
        
        // Change the amount with dollar sign and round the numbers to dollars and cents
        
		var formatAmount = '$' + tAmount.toFixed(2);

        // Change the span#amount element
        
		$('#amount').text(formatAmount);
    });
});

