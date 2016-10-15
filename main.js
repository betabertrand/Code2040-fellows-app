$(document).ready(function(){

	var info = {
		"token" : "a14c730acf2c507c7462c5b711d88804",
		"github" : "https://github.com/thenightowl00/Code2040-fellows-app"
	}

	//$(".outer").text("testing.....");
	//$(".outer").text(info);
	console.log(info);

	/*$.ajax({
		url:'http://challenge.code2040.org/api/register',
		type: 'POST',
		crossDomai"token" : "a14c730acf2c507c7462c5b711d88804",
		"github" : "https://github.com/thenightowl00/Code2040-fellows-app"n: true,
		data: JSON.stringify(info),
		dataType: 'text'
	}).done(function (data) {
		$(".outer").text(data);
		console.log(data)
	});
	*/


	
	$.post("http://challenge.code2040.org/api/register", {"token" : "a14c730acf2c507c7462c5b711d88804",
		"github" : "https://github.com/thenightowl00/Code2040-fellows-app"}).done(function () {
			//alert("done!!!");
		});

	

	
	if ($.post("http://challenge.code2040.org/api/reverse", {"token" : "a14c730acf2c507c7462c5b711d88804"}))
	{
			console.log("get reverse string is done in an if statement!!!");
			/*
			$.getJSON("http://challenge.code2040.org/api/reverse", function(data) {

				var rstring = data;

				$(".outer").append(rstring);
			});
			*/
	}
	







});