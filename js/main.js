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
  cursor.setAttribute('style', `top: ${e.pageY}px; left:${e.pageX}px;`);
});

const leftPictures = document.querySelectorAll('.case-picture-left');

leftPictures.forEach(pic => {
  pic.addEventListener('mousemove', e => {
    console.log('is this thing on?');
    pic.style.backgroundPositionX = -e.offsetX + 'px';
    pic.style.backgroundPositionY = -e.offsetY + 'px';
  });
});

// green-mode

const homePage = document.querySelector('.homepage');
const navLinks = document.querySelectorAll('a');
const homeLine = document.querySelector('.home-line');
const button = document.querySelectorAll('button');
const lightMode = document.querySelector('.light');
const greenMode = document.querySelector('.green');

let green = false;

greenMode.addEventListener('click', () => {
  console.log(navLinks)
  green = true;
  homePage.classList.add('green-mode');
  navLinks.forEach(link => {
    link.classList.add('green-mode');
  });
  homeLine.classList.add('green-mode');
  greenMode.classList.add('green-mode');
  lightMode.classList.add('green-mode');
});

lightMode.addEventListener('click', () => {
  green = false;
  homePage.classList.remove('green-mode');
  navLinks.forEach(link => {
    link.classList.remove('green-mode');
  });
  homeLine.classList.remove('green-mode');
  lightMode.classList.remove('green-mode');
  greenMode.classList.remove('green-mode');
});

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
  if (window.scrollY < homePage.offsetHeight && green) {
    navLinks.forEach(link => {
      link.style.color = 'white';
    });
  }
  if (window.scrollY > homePage.offsetHeight && green) {
    navLinks.forEach(link => {
      link.style.color = 'black';
    });
  }
});
