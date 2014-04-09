replaceInAllCases()
function replaceInAllCases(){
	replaceImages() //replace images when a page is first loaded.
	//Below are for dealing with ajax and such. There is probably a better solution out there, but this worked fine for my intents.
	$( window ).scroll(function() { replaceImages()	});
	$( "div" ).hover(function() { replaceImages()	});
}

function replaceImages(){
	var daveUrl = chrome.extension.getURL("dave.jpg")
	$('img:not(.daved)').attr("src", daveUrl).addClass("daved");
	$('.Image:not(.daved), .img:not(.daved)').css("background-image", "url(" + daveUrl + ")").attr("src", daveUrl).addClass("daved");
}