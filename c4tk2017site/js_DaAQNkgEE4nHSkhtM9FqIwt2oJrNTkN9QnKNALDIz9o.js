(function ($) {
  // Replace cbpAnimatedHeader.js
  $(window).scroll(function(){
      if ($(this).scrollTop() > 200 || location.pathname == '/code-of-conduct.html' || location.pathname == '/challenges.html' || location.pathname == '/awards.html' || location.pathname == '/api.html' || location.pathname == '/menu.html' || location.pathname == '/media.html' || location.pathname === '/rules.html'){
          $('.navbar-default').addClass('navbar-shrink');
      }
      else{
          $('.navbar-default').removeClass('navbar-shrink');
      }
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){
          $('.navbar-toggle:visible').click();
  });

  $('.checkout-button').click(function() {
    fbq('track', 'CompleteRegistration', {
      value: 25.00,
      currency: 'USD'
    });
  });
})(jQuery);
