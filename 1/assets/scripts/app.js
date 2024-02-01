// Elements
const upBtn = document.querySelector('#top');
const counters = document.querySelectorAll('.count');
const speed = 4000;

// Functions
const starterCount = () => {
  counters.forEach((value) => {
      let startValue = 0;
      let endValue = parseInt(value.getAttribute('data-target'));
      let duration = Math.trunc(speed / endValue);
      let counter = setInterval(() => {
        startValue++;
        value.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
};

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
window.addEventListener('scroll', starterCount, { once: true });
window.addEventListener('scroll', goUpDisplay);
upBtn.addEventListener('click', goUp);