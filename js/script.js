const menuOpen = document.querySelector('.menu__btn');
const nav = document.querySelector('.navigation');
const closeMenu = document.querySelector('.menu__btn--close ');
const navLink = document.querySelectorAll('.nav-link');
const btns = document.querySelectorAll('.questions-btn');
const questionsSubtitle = document.querySelectorAll('.questions-subtitle');

//menu

menuOpen.addEventListener('click', function(){
  nav.classList.add('menu-active')
})

closeMenu.addEventListener('click', function(){
  nav.classList.remove('menu-active')
})

navLink.forEach(function(el){
  el.addEventListener('click', function(){
    nav.classList.remove('menu-active')
  })
})

//scroll menu

$(document).ready(function() {
  $('nav a').on('click', function(event){
    event.preventDefault();

    const href = $(this).attr('href');
    const offset = $(href).offset().top;

    $('body,html').animate({
      scrollTop: offset,
    }, 700);
  });
});


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

// change + / -

questionsSubtitle.forEach(function(el) {
  const btn = el.querySelector('.questions-btn')
  el.addEventListener('click', function(e) {
    btns.forEach(item => {
      item.classList.remove('accordion-btn__active')
    })

    if (el.classList.contains('ui-accordion-header-active')) {
      btn.classList.add('accordion-btn__active')
      } else {
      btn.classList.remove('accordion-btn__active')
      }
  })
})
