

const swiper1 = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    centeredSlides: false,
  
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    //transition speed
    speed: 800,

  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true
    }
  });