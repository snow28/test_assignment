$(document).ready(function(){
    $('.slider__wrapper-js').slick({
    });

    $('.header__popup-js').on('click',function(){
        $('.popup-window').toggleClass('popup-window-active');
    });
    $('#button-popup-close').on('click',function(){
        $('.popup-window').toggleClass('popup-window-active');
    });
});