$(document).ready(function () {


    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top + 25
        }, 1200);
    });

    $('#up').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

$(function () {
    $('.scroll-down').click(function () {
        $('html, body').animate({
            scrollTop: $('section.about').offset().top
        }, 'slow');
        return false;
    });
});

