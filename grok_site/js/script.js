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

$( ".d1" ).fadeIn( 1000 );






})( window, undefined );