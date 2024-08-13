const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.style.display = 'none';
}); 

const main = document.querySelector('#main')

document.querySelector('#scrollMap').addEventListener('click', (e) => {
    e.preventDefault();
    // main.scrollIntoView(true);
    window.scrollTo(0, 0)
})

function scrollTo(){
    window.scrollTo(end, start);
}

    // const btn = document.getElementById('to_top');
    //         const smoothScroll = (h) => {
    //         let i = h || 0;
    //         if (i < 200) {
    //             setTimeout(() => {
    //             window.scrollTo(0, i);
    //             smoothScroll(i + 10);
    //             }, 50000);
    //         }
    //     }
    // btn.addEventListener('click', () => smoothScroll());

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


var navlink = document.querySelectorAll('.nav-link');
navlink.forEach(item => {
item.addEventListener('click', (e) => {
  e.preventDefault();
    alert("hello");
    item.classList.add('active');
  })
})







