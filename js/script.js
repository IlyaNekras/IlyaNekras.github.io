'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const sliderParticipants = new Swiper('.participants .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            type: 'fraction',
            el: '.participants .swiper-pagination',
        },
        autoplay: {
            delay: 4000,
        },
        speed: 900,
        navigation: {
            nextEl: '.participants .swiper-button-next',
            prevEl: '.participants .swiper-button-prev',
        },
        breakpoints: {
            550: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

    if (window.innerWidth <= 1024) {
        const sliderStages = new Swiper('.stages .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            pagination: {
                el: '.stages .swiper-pagination',
            },
            navigation: {
                nextEl: '.stages .swiper-button-next',
                prevEl: '.stages .swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            }
        });
    }
});