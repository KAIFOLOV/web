const curtain = document.getElementById('curtain');
const lamp = document.getElementById('lamp');
const light = document.getElementById('light');
const magicTrick = document.getElementById('magic-trick');
const rabbit = document.getElementById('rabbit');
const pigeon = document.getElementById('pigeon');

curtain.addEventListener('click', () => {
  curtain.classList.add('open');
});

let isLightOn = false;
lamp.addEventListener('click', () => {
  isLightOn = !isLightOn;
  light.classList.toggle('active', isLightOn);
  magicTrick.classList.toggle('visible', isLightOn);
});

let isRabbitVisible = true;

rabbit.addEventListener('click', () => {
  if (isRabbitVisible && isLightOn) {
    rabbit.classList.add('hidden');
    setTimeout(() => {
      pigeon.classList.remove('hidden');
    }, 500);
    isRabbitVisible = false;
  }
});

pigeon.addEventListener('click', () => {
  if (!isRabbitVisible && isLightOn) {
    pigeon.classList.add('hidden');
    setTimeout(() => {
      rabbit.classList.remove('hidden');
    }, 500);
    isRabbitVisible = true;
  }
});