const mobileMenu = () => {
    const mobmenuBtn = document.querySelector('.mob-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuCloseBtn = document.querySelector('.close');
    const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-links');

    const closeModalFunction = () => {
        mobileMenu.style.right = '-400px';
        mobileMenuCloseBtn.style.display = 'none';
    };

    mobmenuBtn.addEventListener('click', () => {
        if (mobileMenu.style.right === '0px') {
            mobileMenu.style.right = '-400px';
            mobileMenuCloseBtn.style.display = 'none';
        } else {
            mobileMenu.style.right = '0px';
            mobileMenuCloseBtn.style.display = 'block';
        }
    });

    mobileMenuCloseBtn.addEventListener('click', () => {
        closeModalFunction();
    });

    mobileMenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeModalFunction();
        });
    });
};

export default mobileMenu;
