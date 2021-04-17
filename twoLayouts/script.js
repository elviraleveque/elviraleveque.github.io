let menu = document.getElementById('menu');
let contact = document.getElementById('contact');
let hamburger = document.getElementById('hamb-ico');
let css = document.getElementById('css');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('show');
    contact.classList.toggle('show');
});

changeLayout = function() {
    if (css.getAttribute('href') === 'style.css') {
        css.href = 'style-two.css';
    } else {
        css.href = 'style.css';
    }
}