$(document).ready(function(){

    var h_slider = $('.owl-carousel')

    h_slider.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots : false,
        autoplay : true,
        autoplayTimeout : 5000,
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

    h_slider.on("changed.owl.carousel", function(e){

        var items = e.items.index-4;
        $('span')
    })
    
})

