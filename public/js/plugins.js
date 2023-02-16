// master sliders
// let slider = new MasterSlider();
// slider.setup('masterslider', {
//     width: 1280,
//     height: 515,
//     space: 0,
//     start: 1,
//     grabCursor: true,
//     layout: "boxed",
//     autoplay: true,
//     instantStartLayers: true,
//     loop: true,
// });
// slider.control('bullets');

var slider = new MasterSlider();
slider.setup('masterslider', {
  width: 1140,
  height: 660,
  minHeight: 400,
  space: 0,
  start: 1,
  grabCursor: false,
  layout: "fullwidth",
  wheel: false,
  autoplay: true,
  instantStartLayers: true,
  loop: true,
  view: "basic",
  overPause: false
});
slider.control('bullets');

// swiper modalidades
let swiperProjects = new Swiper(".swiper-projects", {
  autoHeight: true,
  spaceBetween: 40,
  breakpoints: {
    640: { slidesPerView: 1, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 16 }
  },
  pagination: {
    el: ".swiperProjects-pagination", 
    clickable: true
  },
  navigation: {
    nextEl: ".swiperProjects-button-next",
    prevEl: ".swiperProjects-button-prev"
  }
});

// splitting
Splitting();
