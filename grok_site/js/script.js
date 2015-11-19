/* js file */

(function( window, undefined ){

console.log( $ );
var dayButtons = $(".schedule_buttons a")

var divName = $(".schedule div")




dayButtons.on("click", function( e ){

	var className = $( this ).data( "page");


	


	divName.hide();
	$( className ).fadeIn( 1000 );

	$( className ).show();

	e.preventDefault();
});

divName.hide();

$( ".d1" ).fadeIn( 1000 )


// test	



$( function(){

		var buttons = $( ".schedule_buttons a" );
		var dayselect      = $( ".btn" );
		// var pages          = $( ".page" );
		
		dayselect.on( "click", function( e ){

			var atag      = $( this );
			// var classname = atag.data( "page" );

			//changes the tab colors from gray to white when clicked
	        dayselect.addClass( "active" );
	        atag.parent().removeClass( "active" );

	        //hide the pages
			// pages.hide();
			// //show the page related to the button clicked
			// $( classname ).show();

			//prevents the page from reloading
	        e.preventDefault();
	    });

	    // $( ".current_projects a" ).trigger( "click" );
	} );







})( window, undefined );