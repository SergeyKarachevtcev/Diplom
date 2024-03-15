const mobileMenu = () => {
    const mobmenuBtn = document.querySelector('.mob-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuCloseBtn = document.querySelector('.close');
    const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-links');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');
    const callbackBtnMobile = document.getElementById('callback-btn-mobile');

    const closeModalFunction = () => {
        mobileMenu.style.right = '-400px';
        mobileMenuCloseBtn.style.display = 'none';
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
    };

    mobmenuBtn.addEventListener('click', () => {
        if (mobileMenu.style.right === '0px') {
            mobileMenu.style.right = '-400px';
            mobileMenuCloseBtn.style.display = 'none';
        } else {
            mobileMenu.style.right = '0px';
            mobileMenuCloseBtn.style.display = 'block';
            modalOverlay.style.display = 'flex';
            modalOverlay.style.zIndex = '99';
        }
    });

    callbackBtnMobile.addEventListener('click', () => {
        modalOverlay.style.zIndex = '1500';
    });

    mobileMenuCloseBtn.addEventListener('click', () => {
        closeModalFunction();
    });

    mobileMenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeModalFunction();
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-menu')) {
            closeModalFunction();
        }
    });
};

export default mobileMenu;
