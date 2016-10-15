$(document).ready(function(){

	var info = {
		"token" : "a14c730acf2c507c7462c5b711d88804",
		"github" : "https://github.com/thenightowl00/Code2040-fellows-app"
	}

	//$(".outer").text("testing.....");
	//$(".outer").text(info);
	console.log(info);

	//Step 1. Join Challenge
	$.post("http://challenge.code2040.org/api/register", {"token" : "a14c730acf2c507c7462c5b711d88804",
		"github" : "https://github.com/thenightowl00/Code2040-fellows-app"}).done(function () {
			//alert("done!!!");
		});

	
	//Step 2. Reverse 
	/*
	$.post("http://challenge.code2040.org/api/reverse", {"token" : "a14c730acf2c507c7462c5b711d88804"}, function (json) {

		console.log("The string that needs to be reversed is: " + json + " " + json[0] + json[3]);

		var rstring = json;

		var reversedstring = rstring.split("").reverse().join("");

		console.log(reversedstring);
		
		$.post("http://challenge.code2040.org/api/reverse/validate", {"token" : "a14c730acf2c507c7462c5b711d88804", "string": reversedstring}); 

	})*/

	//Step 3. 
	$.post("http://challenge.code2040.org/api/haystack", {"token" : "a14c730acf2c507c7462c5b711d88804"}, function (needle, haystack) {


		console.log("The needle is " + needle.needle);
		console.log("The haystack is" + needle.haystack);

		var num;
		$.each(needle.haystack, function (index, value) {
			if (needle.needle == value)
			{
				num = index;
			}
		})
		console.log(num);
		
		$.post("http://challenge.code2040.org/api/haystack/validate", {"token" : "a14c730acf2c507c7462c5b711d88804", "needle": num}); 

	})









});