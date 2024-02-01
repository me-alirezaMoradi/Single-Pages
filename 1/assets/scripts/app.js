// Elements
const upBtn = document.querySelector('#top');

// Functions
const goUp = () => {

  scrollTo({top: 0, behavior: 'smooth'});
};

const goUpDisplay = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    upBtn.style.display = 'flex';
  } else {
    upBtn.style.display = 'none';
  }
};

// Events
window.addEventListener('scroll', goUpDisplay);
upBtn.addEventListener('click', goUp);