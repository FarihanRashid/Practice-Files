$(function () {
    // back to top js
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        var viewportHeight = window.innerHeight - 100;
        var viewportHeight200 = viewportHeight + 100;
        if (scrolling > viewportHeight200) {
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
        if (scrolling > viewportHeight) {
            $('#header_sec_copy').addClass('bg').slideDown(800);
        }
        else {
            $('#header_sec_copy').slideUp(500);
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
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });

    // preloader js
    $(window).on('load', function () {
        $('.preloader').delay(2000).fadeOut(500);
        $('html, body').delay(1000).animate({ scrollTop: 0 }, 1000);
    });

    // venobox js
    $('.venobox').venobox();


    // header slider js
    $('#header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        dots: false,
    });

    // testimonial slider js
    $('#slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        speed: 1000,
        prevArrow: '.left_button',
        nextArrow: '.right_button',
        dots: true,
    });

    $('#testimonials_sec .slick-dots li button').text('')


    // counterup js
    $('.counter').counterUp({
        delay: 2,
        time: 1500,
    });

    //countdown timer
    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let valentineDay = "Feb 14, 2021 00:00:00",
            countDown = new Date(valentineDay).getTime(),
            x = setInterval(function () {

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    let headline = document.getElementById("headline"),
                        countdown = document.getElementById("countdown"),
                        content = document.getElementById("content");

                    headline.innerText = "It's my birthday!";
                    countdown.style.display = "none";
                    content.style.display = "block";

                    clearInterval(x);
                }
                //seconds
            }, 0)
    }());

    // wow js
    new WOW().init();


});

// email check js
function subscribeEmailCheck() {
    var emailCheckRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var errorMessage = $('.error-Message');
    var subscribeEmail = $('#subscribe-email');


    subscribeEmail.on('blur', function () {
        if (subscribeEmail.val() == "") {
            errorMessage.addClass('error-Message-2');
            errorMessage.text("Please Enter an email address");
            return false;
        }
        else if (!emailCheckRegex.test(subscribeEmail.val())) {
            errorMessage.addClass('error-Message-2');
            errorMessage.text("Please Enter an appropriate email");
            return false;
        }
        else {
            errorMessage.classList.remove('error-Message-2');
            errorMessage.text('');
            return true;
        };
    })


    if (subscribeEmail.val() == "") {
        errorMessage.addClass('error-Message-2');
        errorMessage.text("Please Enter an email address");
        return false;
    }
    else if (!emailCheckRegex.test(subscribeEmail.val())) {
        errorMessage.addClass('error-Message-2');
        errorMessage.text("Please Enter an appropriate email");
        return false;
    }
    else {
        errorMessage.classList.remove('error-Message-2');
        errorMessage.text('');
        return true;
    };

}




