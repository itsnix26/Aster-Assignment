jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 2,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5500,
    smartSpeed: 350,
    nav: true,
    navText: [
      '<img class="prev-next-icon" src= "./images/Prev-arrow.png">',
      '<img src= "./images/Next-arrow.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
});

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    loadEnquire();
  }
};

function loadEnquire() {
  let toggle = document.querySelector(".toggle");
  let enquire = document.querySelector(".enquire");

  toggle.addEventListener("click", function () {
    enquire.classList.toggle("active");
    toggle.classList.toggle("active");
  });
}
