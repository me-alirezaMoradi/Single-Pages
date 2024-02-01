// Elements
const upBtn = document.querySelector('#top');

// Functions
const goUp = () => {
  scrollTo({top: 0, behavior: 'smooth'});
};

// Events
upBtn.addEventListener('click', goUp);