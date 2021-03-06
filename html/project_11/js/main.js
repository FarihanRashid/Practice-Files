$(function () {
  // Sticky menu background
  $(window).on('scroll', function () {
    var scrolling = $(this).scrollTop();
    var viewportHeight = window.innerHeight;
    if (scrolling > viewportHeight) {
      document.querySelector('#navbar').style.opacity = 0.9;
    }
    else{
      document.querySelector('#navbar').style.opacity = 1;
    };
  });

  //animation scroll js
  var html_body = $('html, body');
  $('#navbar a, .btn').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 65
        }, 1000);
        return false;
      }
    }
  });
})