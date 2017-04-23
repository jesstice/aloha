$(function() {

  // SMOOOOOTH SCROLLING

  // FLICKITY SLIDER
	$('.main-carousel').flickity({
  // options
  	cellAlign: 'left',
  	contain: true
	});

  // FORM SUBMIT FUN
	$('.subscribe').on('submit', function(event) {
  	event.preventDefault();
    
    if ( $('#email-input').val() == '' ) {
      alert('You forgot to enter your email! Try again!');  
    } else {
      alert('Thanks for signing up! We promise not to spam you...(too much!)');  
    }; 
  });
  
});