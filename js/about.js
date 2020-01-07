const circleOne = document.getElementById('circle-one');
const circleTwo = document.getElementById('circle-two');

const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const spin = () => {
  circleOne.style.transform = `rotate(${window.pageYOffset/5}deg)`;
  circleTwo.style.transform = `rotate(${window.pageYOffset/5}deg)`;
};

window.addEventListener('scroll', () => {
  debounce(spin());
});
