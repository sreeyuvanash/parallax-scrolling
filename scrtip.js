window.addEventListener('scroll', () => {
    let value = window.scrollY;
    earth.style.top = value * -1.5 + 'px'
    text.style.marginTop = value * 2.5 + 'px'
    hand.style.top = value * 1 + 'px'
    hand.style.left = value * 3 + 'px'
})