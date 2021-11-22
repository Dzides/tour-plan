const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
    },

});
