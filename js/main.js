$(document).ready(function () {
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
    menuButton.addEventListener("click", function () {
        document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
        document.querySelector("body").classList.toggle("lock");
    });

    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
    }    
    function closeModal() {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }


    $(document).keydown(function (e) { 
        if (e.keyCode == 27) {
            var modalOverlay = $(".modal__overlay");
            var modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
        }});

    $(".control").each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "The name must be at least 2 characters",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com",
                },
                phone: {
                    required: "Forgot to enter phone number",
                    minlength: "Phone number must be 11 digitss",
                },
            },
        });
    });

    $('.phone').mask('+7 (000) 000-00-00');
    $('.phone2').mask('+7 (000) 000-00-00');

    AOS.init({
        disable: function () {
            let maxWidth = 1000;
            return window.innerWidth < maxWidth;
        },
    });
    var bLazy = new Blazy();

});

