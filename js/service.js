const upcoming_service = document.querySelector('.upcoming_service');
const text_end = document.getElementById('text-end');
let currentItem = 3;

// upcoming_service.style.display = 'none'; 

// text_end.addEventListener('click', () => {
//     let boxes = document.querySelector('.upcoming_service');
//     for(var i = currentItem; i < currentItem + 3; i++){
//         boxes[i].style.display = 'block';
//     }
//     currentItem += 3;
// });

text_end.addEventListener('click', () => {
    upcoming_service.classList.toggle('active');
})



