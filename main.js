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
	
	$.post("http://challenge.code2040.org/api/reverse", {"token" : "a14c730acf2c507c7462c5b711d88804"}, function (json) {

		console.log("The string that needs to be reversed is: " + json);

		var rstring = json;

		var reversedstring = rstring.split("").reverse().join("");

		console.log(reversedstring);
		
		$.post("http://challenge.code2040.org/api/reverse/validate", {"token" : "a14c730acf2c507c7462c5b711d88804", "string": reversedstring}); 

	})

	//Step 3. 
	
	$.post("http://challenge.code2040.org/api/haystack", {"token" : "a14c730acf2c507c7462c5b711d88804"}, function (needle, haystack) {

		//var haystack; this can be done instead of passing it through the parameter
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
	
	//Step 4
	
	$.post("http://challenge.code2040.org/api/prefix", {"token" : "a14c730acf2c507c7462c5b711d88804"}, function (prefix, array) {

		//var array; this can be done instead of passing it through the parameter
		console.log("The prefix is " + prefix.prefix);
		console.log("The array is" + prefix.array);

		var prefarr = [];
		$.each(prefix.array, function (index, value) { //goes through each array element like a for loop
			if (!value.startsWith(prefix.prefix))
			{
				 prefarr.push(value);
			}
		})

		console.log(prefarr)
		
		$.post("http://challenge.code2040.org/api/prefix/validate", {"token" : "a14c730acf2c507c7462c5b711d88804", "array" : prefarr});
	})
	

	//step 5
	$.post("http://challenge.code2040.org/api/dating", {"token" : "a14c730acf2c507c7462c5b711d88804"}, function (datestamp, interval) {

		//var interval; this can be done instead of passing it through the parameter
		console.log("The datestamp is " + datestamp.datestamp);
		console.log("The interval of seconds is " + datestamp.interval);

		d = new Date(datestamp.datestamp);
		console.log(d);
		var newtime = d.setSeconds(d.getSeconds() + datestamp.interval); //adds the interval to the date.
		console.log(newtime);
		console.log(d);
		var finalDate = d.toISOString();
		console.log(finalDate);
		finalDate = finalDate.replace('.000',''); //realizing this was the highlight of my 5am :) //it wasnt working initally because there was an extra . and three extra zeros
		console.log(finalDate);

		$.post("http://challenge.code2040.org/api/dating/validate", {"token" : "a14c730acf2c507c7462c5b711d88804", "datestamp" : finalDate});
	})


	//throughout there are a few extra variables then needed and alot of consol.log's. I was testing.



});