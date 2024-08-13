const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.style.display = 'none';
}); 


$(window).load(function() { 
    $('.preloader').fadeOut(); 
    $('#fountainTextG').delay(200).fadeOut('slow');    
});

window.onload = function() {
    setTimeout(function() {
      var loader = document.querySelector('.preloader');
      loader.classList.add("active_new");
    }, 4000); 

    // Apply animations to each span element with a delay
    const spans = document.querySelectorAll('.preloader-text span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.animation = ' expandWidth 10s forwards, fadeOut 5s forwards'; // Add fade-out animation
      }, index * 200); // Adjust the delay between each letter's animation
    });
  };