const backgrounds = [
  'assets/images/bg1.png',
  'assets/images/bg2.png'
];
let current = 0;
const bg = document.getElementById('background');

backgrounds.forEach(src => {
  const img = new Image();
  img.src = src;
});
function changeBackground() {
  bg.style.opacity = 0;
  setTimeout(() => {
    current = (current + 1) % backgrounds.length;
    bg.style.backgroundImage = `url('${backgrounds[current]}')`;
    bg.style.opacity = 1;
  }, 1500);
}

bg.style.backgroundImage = `url('${backgrounds[0]}')`;
bg.style.opacity = 1;

setInterval(changeBackground, 7000);