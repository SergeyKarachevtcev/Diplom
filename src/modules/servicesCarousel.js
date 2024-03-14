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
            640: {
                slidesPerView: 1,
                /* spaceBetween: 20, */
            },
            768: {
                slidesPerView: 2,
                /* spaceBetween: 30, */
            },
            1024: {
                slidesPerView: 3,
                /* spaceBetween: 40, */
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
