$(function () {
    // back to top js
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    //Scroll function for navbar and backToTop Btn
    $(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 0) {
            $('#navbar').addClass('navbar-bg');
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('#navbar').removeClass('navbar-bg');
            $('.back-to-top').fadeOut(500);
        }
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 0) {
            $('#navbar').addClass('navbar-bg');
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('#navbar').removeClass('navbar-bg');
            $('.back-to-top').fadeOut(500);
        }
    });

    //Banner Slider js
    $('#banner-slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        prevArrow: '#banner .slide-prev-arrow',
        nextArrow: '#banner .slide-next-arrow',
        infinite: true,
        speed: 200,
        fade: true,
        cssEase: 'linear'
    });

    // //animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 84
                }, 1000);
                return false;
            }
        }
    });

    //portfolio lightbox
    $('.venobox').venobox({
        border: '5px',
    });

    // portfolio slick
    $('.portfolio-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        centerPadding: false,
    });


    // service slick js 
    $('#services-sec .services-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '#services-sec .slider-btn-up',
        nextArrow: '#services-sec .slider-btn-down',
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
    });

    // testimonial slick js
    $('#testimonial-sec .testimonial-img-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: false,
        asNavFor: '#testimonial-sec .testimonial-details',
        prevArrow: '#testimonial-sec .slider-btn-up',
        nextArrow: '#testimonial-sec .slider-btn-down',
    });
    $('#testimonial-sec .testimonial-details').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '#testimonial-sec .testimonial-img-wrapper',
    });

    // bootstrap scroll spy
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar',
        offset: 86,
    });
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
        bootstrap.ScrollSpy.getInstance(dataSpyEl)
            .refresh()
    })


});