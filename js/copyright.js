const copyright = document.querySelector('#copyright');

const currentYear = new Date().getFullYear();

copyright.innerHTML = `<p>&copy; Wildhaber ${currentYear}</p>`;
