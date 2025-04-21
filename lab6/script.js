document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const catImage = document.querySelector('.left');
    const dogImage = document.querySelector('.right');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
  
        switch (target) {
          case 'left':
            catImage.style.display = 'block';
            dogImage.style.display = 'none';
            break;
          case 'both':
            catImage.style.display = 'flex';
            dogImage.style.display = 'flex';
            break;
          case 'right':
            catImage.style.display = 'none';
            dogImage.style.display = 'block';
            break;
        }
      });
    });
  });