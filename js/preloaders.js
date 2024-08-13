window.onload = function() {
    setTimeout(function() {
      var loader = document.querySelector('.preloader-container');
      loader.classList.add("active_new");
    }, 4000); 

  const spans = document.querySelectorAll('.preloader-text span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.animation = ' expandWidth 10s forwards, fadeOut 5s forwards';
      }, index * 200); 
    });
  };