var tl = gsap.timeline();

tl.from('.main-services', {
    opacity : 0,
    y : "60%",
    duration : 6,
    delay : 3,
    stagger : 4,
    scrollTrigger : {
        trigger : ".main-services",
        start : 680,
        end : "top 50%",
        scrub : 5,
        // markers : true,
    }
});
  
tl.from('.categories', {
    opacity : 0,
    y : "65%",
    duration : 6,
    delay : 4,
    stagger : 5,
    scrollTrigger : {
        trigger : ".categories",
        start : 1250,
        end : "top 60%",
        scrub : 5,
    }
});

tl.from('.main_categories', {
    opacity : 0,
    y : "65%",
    duration : 6,
    delay : 5,
    stagger : 6 ,
    scrollTrigger : {
        trigger : ".main_categories",
        start : 1450,
        end : "top 70%",
        scrub : 5,
    }
});
  
tl.from('.why_choose__us', {
    opacity : 0,
    y : "65%",
    duration : 10,
    delay : 6,
    stagger : 1,
    scrollTrigger : {
        trigger : ".why_choose__us",
        start : 1900,
        end : "top 50%",
        scrub : 5,
        // markers : true,
    }
});


