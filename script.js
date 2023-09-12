
var timeline =gsap.timeline();
let circle = document.querySelector('#circle');
window.addEventListener('mousemove', function (details) {
    let x = details.clientX;
    let y = details.clientY;

    setTimeout(function (){
    circle.style.top = y + 'px';
    circle.style.left = `${x}px`;
    }, 50);
})


timeline
.from('#b', { duration: 2, left:0, ease:'Expo.easeInOut', opacity: 0 })
.from('h2', { duration: 2, right:0, ease:'Expo.easeInOut'},'-=1')
.from('#a', { duration: 2, left:0, ease:'Expo.easeInOut', opacity: 0 },'-=1')