$(function() {
  smoothScroll(1000);
  BackToTop();
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function BackToTop() {
  $(".arrow-up").hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1100) {
      $(".arrow-up").fadeIn("slow");
    } else {
      $(".arrow-up").fadeOut("slow");
    }
    if($(window).scrollTop() + $(window).height() <= $(document).height() - $("#footer").height() - 120) {
      $(".arrow-up").addClass("fixed");
    }
    else {
      $(".arrow-up").removeClass("fixed");
    }
    // if($(window).scrollTop() + $(window).height() > $(document).height() - $("#footer").height()) {
    //   $(".arrow-up").css("position","absolute");
    //   $(".arrow-up").css("bottom","290px");
    //   $(".arrow-up").css("right","5%");
    // }
  });
}
