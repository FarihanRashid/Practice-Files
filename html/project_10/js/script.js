$(function(){
    // back to top js
    $('.back-to-top').on('click', function(){
        $('html, body').animate({scrollTop:0},1000);
    });
    
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        var viewportHeight= window.innerHeight-100 ;
        var viewportHeight200= viewportHeight + 100;
        if(scrolling > viewportHeight200){
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling > viewportHeight){
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
       $(window).on('load', function(){
            $('.preloader').delay(2000).fadeOut(500);
            $('html, body').delay(2000).animate({scrollTop:0},1000);
       });
});