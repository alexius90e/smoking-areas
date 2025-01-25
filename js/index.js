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

const partneryV2Swiper = new Swiper('.first-screen__slider .swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1.25,
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.first-screen__controls-next',
    prevEl: '.first-screen__controls-prev',
  },
});
