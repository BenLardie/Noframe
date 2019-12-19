// loader

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    console.log('loading')
  loader.className += ' hidden';
});

// progress bar

const progressBar = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('status-bar').style.height = `${scrolled}%`;
}

window.onscroll = () => {
  progressBar();
};

// mouse effects

const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', `top: ${e.pageY}px; left:${e.pageX}px;`)
})

// footer


const footer = document.querySelector('footer')

window.addEventListener('scroll', () => { 
    footer.style.visibility = 'hidden';
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.style.visibility = 'visible';
    footer.style.position = 'fixed';
    // footer.style.removeProperty('top');
    footer.style.bottom = 0;
    console.log('bottom')
  }
  if (window.scrollY === 0) {
    footer.style.visibility = 'visible';
    footer.style.top = '748px';
    footer.style.bottom = '';
    console.log('top')
  }
});
