const open = document.querySelector('.open-menu');
const overlay = document.querySelector('.overlay');

open.addEventListener('click', function(){
  open.classList.toggle('active');
  overlay.classList.toggle("open");
});