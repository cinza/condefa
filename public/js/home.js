
$(document).ready(function(){
    $(".showContent").click(function(){
      $('.showContent').removeClass('active');
      $('.slide-about').removeClass('active');
        var elem = $('.slide-about')[$(this).attr('data-content')];

        $(this).toggleClass('active');
        $(elem).toggleClass('active');
    });

    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

});
