 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1200: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
        },
      });
