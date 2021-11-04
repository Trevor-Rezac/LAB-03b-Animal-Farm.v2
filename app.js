// import functions and grab DOM elements
const dogSound = document.getElementById('dog-sound');
const dogImage = document.getElementById('dog-image');

const catSound = document.getElementById('cat-sound');
const catImage = document.getElementById('cat-image');

const horseSound = document.getElementById('horse-sound');
const horseImage = document.getElementById('horse-image');

const animalClick = document.getElementById('animal-click');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

dogImage.addEventListener('click', () => {
  dogSound.play();
  const animalHeader = animalClick.value;
  animalClick.textContent = 'The dog barked!';
});  

catImage.addEventListener('click', () => {
  catSound.play();
  const animalHeader = animalClick.value;
  animalClick.textContent = 'The cat meowed!';
});

horseImage.addEventListener('click', () => {
  horseSound.play();
  const animalHeader = animalClick.value;
  animalClick.textContent = 'The horse neighed!';
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'c') {
    catSound.play();
    const animalHeader = animalClick.value;
    animalClick.textContent = 'The cat meowed!';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'd') {
    dogSound.play();
    const animalHeader = animalClick.value;
    animalClick.textContent = 'The dog barked!';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'h') {
    horseSound.play();
    const animalHeader = animalClick.value;
    animalClick.textContent = 'The horse neighed!';
  }
});