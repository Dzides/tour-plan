var swiperHotel = new Swiper('.hotel-slider', {
    loop: true,
    slidesPerView: 1,
    effect: "coverflow",

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
    },

});
var swiperReviews = new Swiper('.reviews-slider', {
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },

});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});