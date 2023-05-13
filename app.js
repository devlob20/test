var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: "",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});