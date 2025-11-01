'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.classList.remove("fixed");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });

    // SLIDER TEAM
    new Swiper(".team-slider", {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        navigation: {
            prevEl: '.team .swiper-button-prev',
            nextEl: '.team .swiper-button-next',
        },
    });

    // SLIDER 
    new Swiper(".alert-slider", {
        spaceBetween: 20,
        slidesPerView: "auto",
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    // SHOW/HIDE ANSWER 
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-item__head').addEventListener('click', () => item.classList.toggle('active'));
    });

    // SHOW/HIDE MOBILE MENU 
    document.querySelector(".burger").addEventListener("click", function () {
        document.body.classList.toggle("active");
        document.querySelector('.header').classList.toggle("active");
    });

    function hideMobileMenu(e) {
        if (!e.target.closest('.header-content') && !e.target.closest('.burger')) {
            document.body.classList.remove("active");
            document.querySelector('.header').classList.remove("active");
        }
    }

    document.addEventListener('click', function (e) {
        hideMobileMenu(e);
    });
});