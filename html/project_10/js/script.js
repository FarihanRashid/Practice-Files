$(function(){
    // back to top
    $('.back-to-top').on('click', function(){
        $('html, body').animate({scrollTop:0},1000);
    });
    
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
    
        if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling > 500){
            $('.navbar').addClass('bg');
        }
        else {
            $('.navbar').removeClass('bg');
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
                        scrollTop: target.offset().top - 0
                    }, 1500);
                    return false;
                }
            }
        });
    
    
       $(window).on('load', function(){
            $('.preloader').delay(2000).fadeOut(500);
            $('html, body').delay(2000).animate({scrollTop:0},1000);
       });
});