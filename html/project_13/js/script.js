$(function () {
    // back to top js
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // bootstrap scroll spy

    // $(function () {
    //     var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    //         target: '#navbar',
    //         offset: 75,
    //     });
    // });

    // scrollspy js
    scrollSpy('.navbar-nav', {
        sectionSelector: 'div',
        targetSelector: 'a',
        offset: 78,
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
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '#banner .carousel-control-prev',
        nextArrow: '#banner .carousel-control-next',
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
                    scrollTop: target.offset().top - 78
                }, 2000);
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
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
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
        centerPadding: false,
        focusOnSelect: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            },
        ]
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


    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });

    // teams section slick js 
    $('#teams-sec .teams-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
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
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    // market place slick js 
    $('#market-place-sec .market-place-content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    centerMode: false,
                }
            },
        ]
    });

});
