replaceInAllCases()
function replaceInAllCases(){
	replaceImages() //replace images when a page is first loaded.
	//Below are for dealing with ajax and such. There is probably a better solution out there, but this worked fine for my intents.
	$( window ).scroll(function() { replaceImages()	});
	$( "div" ).hover(function() { replaceImages()	});
}

function replaceImages(){
	var daveUrl = chrome.extension.getURL("dave.jpg")
	//replace images with the image of Dave, mark as done with new class
	$('img:not(.daved)').attr("src", daveUrl).addClass("daved");
	//replace classes .img and .Image, mostly added this because Instagram doesn't use actual img objects
	$('.Image:not(.daved), .img:not(.daved)').css("background-image", "url(" + daveUrl + ")").attr("src", daveUrl).addClass("daved");
}