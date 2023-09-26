$(function () {

    $('.arrow').click(function () {
        $(this).toggleClass('a1');
        $(this).parents('.q').toggleClass('active');
    });

});