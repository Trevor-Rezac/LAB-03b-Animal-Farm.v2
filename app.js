// import functions and grab DOM elements
const dogSound = document.getElementById('dog-sound');
const dogImage = document.getElementById('dog-image');

const catSound = document.getElementById('cat-sound');
const catImage = document.getElementById('cat-image');

const horseSound = document.getElementById('horse-sound');
const horseImage = document.getElementById('horse-image');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

dogImage.addEventListener('click', () => {
  dogSound.play();
});  

catImage.addEventListener('click', () => {
  catSound.play();
});

horseImage.addEventListener('click', () => {
  horseSound.play();
});