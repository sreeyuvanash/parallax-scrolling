let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    earth.style.top = value * -1 + 'px';
    hand.style.right = value * -3 + 'px';
    hand.style.top = value * 0.5 + 'px';

})