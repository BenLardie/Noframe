const circle = document.getElementById('circle');

const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function() {
    let context = this;
    const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const spin = () => {
      console.log('spin')
    circle.style.transform = `rotate(${window.pageYOffset/2}deg)`;
  }
  

window.addEventListener('scroll', () => {
  debounce(spin());
})

// const spin = () => {
    // const winScroll =
    //   document.body.scrollTop || document.documentElement.scrollTop;
    // const height =
    //   document.documentElement.scrollHeight -
    //   document.documentElement.clientHeight;
//   const scrolled = (window.screenTop / 10) % Math.PI;
//     console.log(scrolled)
//     circle.style.transform = `rotate(${scrolled}rad)`;
//   };

//   window.onscroll = () => {
//     spin();
//   };

//   $(window).scroll(function() {
//     var theta = $(window).scrollTop() / 10 % Math.PI;
//     $('#leftgear').css({ transform: 'rotate(' + theta + 'rad)' });
//     });