$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel();

  // Custom Navigation Events
  $(".next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });