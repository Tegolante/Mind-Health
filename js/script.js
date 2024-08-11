$(document).ready(function() {
    $('.header__hamburger').on('click', function() {
        $('.header__menu').toggleClass('active');
        $('.header__hamburger').toggleClass('active');
        $('.header__hamburger i ').toggleClass('fa-xmark');
        $('.bg__menu').toggleClass('active');
    });
});