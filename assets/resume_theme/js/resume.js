(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Change background color
  $('.color-mode').click(changeBgColor);


  // responsive button to change backgroun color
  if (screen.width <= 991) {
    // $('footer.color-mode').css('display', 'none');
    // var nav = document.getElementById('menu-list');
    // var changeBg = document.createElement('footer.color-mode');
    // changeBg.innerHTML = 'mode';
    // nav.appendChild(changeBg);
    // Change background color
    // changeBg.onclick = changeBgColor;
  }

  //function to change background color
  function changeBgColor(){
    var bgColor = $('.bg-content').css('background-color');
    if (bgColor === 'rgb(255, 255, 255)') {
      $('.bg-content').css('background-color', 'black');
    }
    else {
      $('.bg-content').css('background-color', 'white');
    }
  }

})(jQuery); // End of use strict
