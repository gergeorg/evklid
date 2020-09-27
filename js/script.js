window.addEventListener('DOMContentLoaded', function() {

})

//menu

document.querySelector('.menu__btn').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('menu-active')
})



//slider

var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
});

//accordion

$( function() {
  $( "#accordion" ).accordion()
});

$( "#accordion" ).accordion({
  heightStyle: "content",
  collapsible: true,
  active: 5
});

document.querySelectorAll('.questions-subtitle').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.target.querySelector('.questions-btn').classList.toggle('accordion-btn__active')
  })
})
