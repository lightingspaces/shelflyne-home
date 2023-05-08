(function($) {
  "use strict"; // Start of use strict

  $(window).on('load', function(){
    $("#preloader").delay(2000).fadeOut("slow");
  });

  // Detect when form-control inputs are not empty
  $(".sh-contactForm .form-control").on("input", function() {
    if ($(this).val()) {
      $(this).addClass("hasValue");
    } else {
      $(this).removeClass("hasValue");
    }
  });


  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  var $menuLink = $(".menu a");
  $menuLink.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    fullpage_api.setAllowScrolling(true);
  });


})(jQuery); // End of use strict



