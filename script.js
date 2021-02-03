$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 3,
      },
      650: {
        items: 5,
      },
      1000: {
        items: 7,
      },
    },
  });
});
