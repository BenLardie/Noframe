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

// mouse
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');

document.addEventListener('mousemove', e => {
  cursor.setAttribute(
    'style',
    `top: ${e.pageY + 12}px; left:${e.pageX + 12}px;`
  );
});

// wayfinder
window.addEventListener('DOMContentLoaded', () => {
  const blogLinks = document.querySelectorAll('.way-link');
  const boxes = document.querySelectorAll('.box');
  console.log(blogLinks);
  blogLinks.forEach(link => {
    link.addEventListener('mouseover', e => {
      const box = boxes[e.target.dataset.month - 1];
      box.style.opacity = 0;
    });
  });

  blogLinks.forEach(link => {
    link.addEventListener('mouseleave', e => {
      const box = boxes[e.target.dataset.month - 1];
      box.style.opacity = 1;
      box.style.background = 'rgba(255, 255, 255, 0.5)';
    });
  });
});
