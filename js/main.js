// progress bar


function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('status-bar').style.height = `${scrolled}%`;
}

window.onscroll = () => {
  myFunction();
};

const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', `top: ${e.pageY}px; left:${e.pageX}px;`)
})