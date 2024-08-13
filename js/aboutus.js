// fixed-top
const preloader = document.querySelector('.preloader');
        
window.addEventListener('load', () => {
    preloader.style.display = 'none';
}); 


let cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';
  });

  document.addEventListener('mouseout', () => {
    cursor.style.display = 'none'
  }); 

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots : false,
    responsive:{
        0:{
            items:1,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true

        },
        600:{
            items:1,
            autoplay:true,
            autoplayTimeout:8000,
            autoplayHoverPause:true
        },
        1000:{
            items:1,
            autoplay:true,
            autoplayTimeout:8000,
            autoplayHoverPause:false
        },
        1250 :{
            items:1,
            autoplay:true,
            autoplayTimeout:8000,
            autoplayHoverPause:false
        }
    }
});

// const preloader = document.querySelector('.preloader');

// window.addEventListener('load', () => {
//     document.preloader.style.display = 'none';
// }); 


// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   autoplay : true,
//   autoplayHoverPause : true,
//   autoplayTimeout : 8000,
  
//   flipEffect : {
//     slideShadows : true,
//   },

//   pagination: {
//     el: '.swiper-pagination',
//     clickable : true,
//   },

//    navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
// });

