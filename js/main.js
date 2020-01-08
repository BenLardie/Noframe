// loader

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  console.log('loading');
  loader.className += ' hidden';
});

// progress bar

const progressBar = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('status-bar').style.height = `${scrolled}%`;
};

window.onscroll = () => {
  progressBar();
};

// mouse effects

const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');

// links.forEach(link => {
//     link.addEventListener('mouseover', () => {
//         console.log('its hovering')
//         cursor.style.backgroundColor= 'black'
//     })
// })

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', `top: ${e.pageY + 12}px; left:${e.pageX + 12}px;`);
});

// window.addEventListener('scroll', e => {
//   const target = document.querySelector('.main-services');
//   let scrolled = window.pageYOffset;
//   let rate = scrolled * 2;
//   console.log(rate);
//   target.style.transform = `translate3d('0px, ${rate}px, 0px);`;
// });

// const services = document.getElementsByClassName('main-services');
// new simpleParallax(services, {
// 	orientation: 'right'
// });


// footer

const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  footer.style.visibility = 'hidden';
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.style.visibility = 'visible';
    footer.style.position = 'fixed';
    footer.style.bottom = 0;
  }
  if (window.scrollY === 0) {
    footer.style.visibility = 'visible';
    footer.style.top = '748px';
    footer.style.bottom = '';
  }
});
