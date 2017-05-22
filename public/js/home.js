
$(document).ready(function(){
    $(".showContent").click(function(){
      $('.showContent').removeClass('active');
      $('.slide-about').removeClass('active');
        var elem = $('.slide-about')[$(this).attr('data-content')];
        console.log($(this).attr('data-content'));
        console.log(elem);
        $(this).toggleClass('active');
        $(elem).toggleClass('active');

    });

});
