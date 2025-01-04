const swiper = new Swiper('.swiper', {
    
      centeredSlides: true,
       loop: true,
      speed: 800,
      slidesPerView: 'auto',
     
      spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
       navigation: {
          nextEl: '#right-button',
          prevEl: '#left-button',
  },
    
  breakpoints: {
    0: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1,
       slidesPerGroup:1,
      spaceBetween: 20,
    },
        480: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1.5,
       slidesPerGroup:1,
      spaceBetween: 20,
    },
    767: { /* when window >= 767px - webflow tablet */
          slidesPerView: 2,
       slidesPerGroup:1,
      spaceBetween: 30,
    },
    992: { /* when window >= 988px - webflow desktop */
       slidesPerView: 3,
       slidesPerGroup:1,
      spaceBetween: 30,
    }
  },
});

$('.hamburger-menu').click( function() {
    $('.nav-menu-links').toggleClass('active');
    $(this).toggleClass('active');
});


$('.tab-02-link').click( function() {
    $(this).siblings().removeClass('w--current');
    $(this).addClass('w--current');
});

$('.faq-item').click( function() {
    // $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
});
