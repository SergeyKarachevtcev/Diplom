'use strict';

const accordeon = () => {
    const accordeon = document.querySelector('.accordeon');
    const elementAccordeon = accordeon.querySelectorAll('.element');
    let elementContent = accordeon.querySelectorAll('.element-content');

    elementAccordeon.forEach((element) => {
        element.addEventListener('click', (e) => {
            if (e.target.closest('.element')) {
                const tabBtn = e.target.closest('.element');
                elementAccordeon.forEach((tab, index) => {
                    if (tab === tabBtn) {
                        if (!tab.classList.contains('active')) {
                            tab.classList.add('active');
                            let elementContent = tab.querySelector('.element-content');
                            elementContent.style.display = 'block';
                        } else {
                            tab.classList.remove('active');
                            let elementContent = tab.querySelector('.element-content');
                            elementContent.style.display = 'none';
                        }
                    } else {
                        tab.classList.remove('active');
                        let elementContent = tab.querySelector('.element-content');
                        elementContent.style.display = 'none';
                    }
                });
            }
        });
    });
};

export default accordeon;
