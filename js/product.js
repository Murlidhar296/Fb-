$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots : false,
    responsive:{
        0:{
            items:1,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true

        },
        600:{
            items:1,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        },
        1000:{
            items:1,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:false
        },
        1250 :{
            items:1,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:false
        }
    }
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });

let cursor =  document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';
  cursor.style.display = 'block'
});

document.addEventListener('mouseout', () => {
  cursor.style.display = 'none'
}); 