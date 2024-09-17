// Handle To Top Button
const toTopBtn = document.querySelector('#to-top');

function userScroll() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  });
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function addBounce() {
  document.querySelector('#chevron-up').classList.add('fa-bounce');
  setTimeout(() => {
    document.querySelector('#chevron-up').classList.remove('fa-bounce');
  }, 1000);
}

function removeBounce() {
  document.querySelector('#chevron-up').classList.remove('fa-bounce');
}

toTopBtn.addEventListener('click', scrollToTop);
toTopBtn.addEventListener('mouseover', addBounce);
toTopBtn.addEventListener('mouseout', removeBounce);
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('load', userScroll);
