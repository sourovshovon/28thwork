$(document).ready(function(){
	// counter
	$('.counter').counterUp({
    delay: 10,
    time: 1000

    });
	// aos
    AOS.init();

});

// wow js
wow = new WOW(
   {
   boxClass:     'wow',      // default
   animateClass: 'animated', // default
   offset:       0,          // default
   mobile:       true,       // default
   live:         true        // default
 }
 )
 wow.init();