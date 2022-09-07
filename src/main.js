
$(document).ready(function () {
    $('.slide-image').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: document.querySelector(".prev"),
        nextArrow: document.querySelector(".next"),
    });
});