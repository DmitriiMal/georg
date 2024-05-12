const boxes = document.querySelectorAll('.scroll-animation');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4.5;
  boxes.forEach((box, idx) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
