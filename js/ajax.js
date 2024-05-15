const runDate = document.querySelector('#run-date');
const datetime = document.querySelector('#datetime');
const ok = document.querySelector('#ok');
const output = document.querySelector('#output');

function getDate(target, response) {
  let xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status == 200) {
      if (target) {
        const date = new Date(this.responseText);

        // Array of month names
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Get day, month, and year components from the date object
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        // Get hours and minutes components from the date object
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        const formatedDate = `${day}. ${monthNames[monthIndex]} ${year}, ${hours}.${minutes} Uhr`;
        console.log(formatedDate);

        target.innerText = formatedDate;
        target.value = this.responseText;
      }
    } else {
      console.log(this.status);
    }
  };
  xhttp.open('GET', response, true);
  xhttp.send();
}
function setDate() {
  output.innerHTML = datetime.value;
}

getDate(runDate, 'https://malyshkin.net/run-date.php');
getDate(datetime, 'https://malyshkin.net/run-date.php');

ok.addEventListener('click', setDate);
