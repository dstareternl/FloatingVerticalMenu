/*

Title: Vertical Floating Menu
Author: Zeno Popovici (http://www.zeno.ro)
Version: 0.1

*/

jQuery(document).ready(function() {

	// Element ID
	var elementName = "#aside";
	
	// Set Last Scroll (check scroll direction)
	var lastScroll = 0;
	
	// On Scroll
	$( window ).scroll( function () { 
		
		// Element Offset (Scroll Change)
		var elementOffset = $( document ).scrollTop() + "px";
		// Element Current Location
		var elementLocation = $( elementName ).position();
		// Element Height
		var elementHeight = $( elementName ).height();
		
		// Convert valuest to Integer
		elementOffset = parseInt( elementOffset );
		elementHeight = parseInt( elementHeight );
		elementLocation = parseInt( elementLocation.top );
	
		// If scroll direction is down
	   if ( elementOffset > lastScroll ) {
		   //If scroll has passed 1/2 of element
			if ( elementOffset > elementHeight / 2 + elementLocation )  {
		   		//Scroll to offset
				$( elementName ).animate( { top: elementOffset }, { duration: 500, queue: false } );
			}
		// If scroll direction is up
	   } else {
	   		//Scroll to offset
			$( elementName ).animate( { top: elementOffset }, { duration: 500, queue: false } );
	   }
	   // Reset scroll direction
	   lastScroll = elementOffset;
	});

});