// // $('.carousel').carousel();
// console.log('hola');
$(document).ready(function(){
    $(".showContent").click(function(){
      $('.showContent').removeClass('active');
      $('.slide-about').removeClass('active');
        var elem = $('.slide-about')[$(this).attr('data-content')];

        $(this).toggleClass('active');
        $(elem).toggleClass('active');
    });

});
