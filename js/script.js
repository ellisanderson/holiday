$(document).ready(function(){

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  for (var i = 0; i < 300; i++) {
    $('.snow-container').append('<div class="snow"></div>');
  };

  function snowfall (){
    $('.snow').each(function(){
      var bodyWidth = document.body.clientWidth
      var bodyHeight = document.body.clientHeight;
      var randPosX = Math.floor((Math.random()*bodyWidth));
      var randPosY = Math.floor((Math.random()*bodyHeight));
      var randDelay = Math.floor(Math.random()*5);
      var randDimen = Math.floor(Math.random()*3 + 2);
      var randTime = Math.floor(Math.random()*4 + 4);

      $(this).css({
        'top': randPosY + 'px',
        'left': randPosX + 'px',
        'animation-delay' : randDelay + 's',
        'border': randDimen + 'px solid white',
        'animation-duration' : randTime + 's',
      })
    });
  }

  window.onload= snowfall();

  var resizeId;
  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 0);
  });

  function doneResizing(){
    snowfall();
  };



  ///Add Smoke
  var smoke = '<img class="smoke" src="images/smoke.png" alt="smoke image">';

  for (var i = 0; i < 3; i++) {
    $('.smoke-container').append(smoke);
  }

  $('#greeting').css('opacity','1');




  //Animation Launch on Scroll View of .couple div

  //Cache reference to window and animation items
  var $animation_elements = $('.ellis, .emily');
  var $window = $(window);

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $('.ellis').addClass('ellis-animation');
        $('.emily').addClass('emily-animation');
      } else {
        $('.ellis').removeClass('ellis-animation');
        $('.emily').removeClass('emily-animation');
      }
    });
  }



  //Smooth Scrolling

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top + 100
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });

});
