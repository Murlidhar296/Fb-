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
            autoplayTimeout:5000,
            autoplayHoverPause:true
        },
        1000:{
            items:1,
            autoplay:true,
            autoplayTimeout:6000,
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