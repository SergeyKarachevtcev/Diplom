'use strict';
import { Navigation, Pagination } from 'swiper/modules';

import Swiper from 'swiper';

const servicesCarousel = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        // Optional parameters
        loop: true,
        breakpoints: {
            '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            '@1.50': {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

export default servicesCarousel;
