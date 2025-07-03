'use strict'
document.addEventListener('DOMContentLoaded', () => {
    // SLIDER
    new Swiper(".section-how__slider", {
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        pagination: {
            el: ".section-how__slider .swiper-pagination",
            dinamicBullets: true,
            clickable: true,
        },
    });

    // SHOW/HIDE ANSWER 
    document.querySelectorAll('.section-faq__item').forEach(item => {
        item.querySelector('.section-faq__item-head').addEventListener('click', () => item.classList.toggle('active'));
    });

    // SHOW/HIDE TEXT 
    document.querySelectorAll(".more-btn").forEach(btn => {
        btn.addEventListener("click", () => btn.parentElement.classList.toggle("active"));
    });

    // SHOW/HIDE MOBILE MENU 
    document.querySelector(".header-burger").addEventListener("click", function () {
        document.body.classList.toggle("active");
        document.querySelector('.header').classList.toggle("active");
    });

    function hideMobileMenu(e) {
        if (!e.target.closest('.header-content') && !e.target.closest('.header-burger')) {
            document.body.classList.remove("active");
            document.querySelector('.header').classList.remove("active");
        }
    }

    document.addEventListener('click', function (e) {
        hideMobileMenu(e);
    });
});