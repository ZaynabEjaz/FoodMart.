const leftArrow = document.querySelector('.arrows button:first-child');
const rightArrow = document.querySelector('.arrows button:last-child');

leftArrow.addEventListener('click', () => {
    alert('Left arrow clicked');
});

rightArrow.addEventListener('click', () => {
    alert('Right arrow clicked');
});

const slider = document.getElementById('slider');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const scrollAmount = 300; // Adjust based on card size

leftButton.addEventListener('click', () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
