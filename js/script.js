$('.counter').counterUp({
    delay: 10,
    time: 1000
});
var containerEl = document.querySelector('.fillgal');

var mixer = mixitup(containerEl);
$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "Mentors."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

$('.multiple-items').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3
  });
  


  $(document).ready(function(){
    var carousel1 = $('.owl-carousel-1').owlCarousel({
      items: 6,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1500, 
      autoplayHoverPause: true, 
      smartSpeed: 3000,
    });
  
    var carousel2 = $('.owl-carousel-2').owlCarousel({
      items: 6,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      smartSpeed: 3000,
      
    });
  });