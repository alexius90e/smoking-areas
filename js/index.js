const headerElems = {
  burger: document.querySelector('.header__burger-button'),
  menu: document.querySelector('.header__menu'),
};

if (headerElems.burger && headerElems.menu) {
  headerElems.burger.addEventListener('click', () => {
    headerElems.menu.classList.add('active');
  });

  headerElems.menu.addEventListener('click', (event) => {
    const isOverlay = event.target === event.currentTarget;
    const isCloseBtn = event.target.classList.contains('header__menu-close-button');
    const isPhoneLink = event.target.classList.contains('header__menu-phone-link');
    const isSocialLink = event.target.classList.contains('header__menu-social-link');
    const isCallbackBtn = event.target.classList.contains('header__menu-callback-button');

    if (isOverlay || isCloseBtn || isPhoneLink || isSocialLink || isCallbackBtn) {
      event.currentTarget.classList.remove('active');
    }
  });
}
