const runDate = document.querySelector('#run-date');

function loadDoc() {
  let xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status == 200) {
      runDate.innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'content.txt', true);
  xhttp.send();
}

loadDoc();
