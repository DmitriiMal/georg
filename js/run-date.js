const runDate = document.querySelector('#run-date');

function loadDoc() {
  let xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status == 200) {
      runDate.innerHTML = this.responseText;
      console.log(this.responseText);
    } else {
      console.log(this.status);
    }
  };
  xhttp.open('GET', 'https://malyshkin.net/run-date.php', true);
  // xhttp.open('GET', 'content.txt', true);
  xhttp.send();
}

loadDoc();
