$(function () {
  
  // back to top js
  $('.back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  // video
  $('.venobox').venobox();

  // counter
  $('.counter').counterUp({
    delay: 5,
    time: 2000
  });

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 300){
      $('.navbar').addClass('navbg');
    }
    else {
      $('.navbar').removeClass('navbg');
    }
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 300) {
      $("#navbar-copy").slideDown(800);
      $('.back-to-top').fadeIn(500);
    }
    else {
      $("#navbar-copy").fadeOut(300);
      $('.back-to-top').fadeOut(500);
    }
  });


  //animation scroll js
  var html_body = $('html, body');
  $('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 85
        }, 1000);
        return false;
      }
    }
  });

  // blog slider
  $('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      }
    ]
  });

  // preloader js
  $(window).on('load', function () {
    $('.preloader-wrapper').delay(1).fadeOut(500);
  });

  // jQuery(function(){
  //   jQuery(".player").YTPlayer();
  // });

  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  })
});