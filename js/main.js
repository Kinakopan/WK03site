$(function() {
    $('.header__hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.header__nav').addClass('active');
        } else {
            $('.header__nav').removeClass('active');
        }
    });
});
