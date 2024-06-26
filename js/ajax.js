const runDate = document.querySelector('#run-date');

const dateForm = document.querySelector('#date-form');
const dateTime = document.querySelector('#datetime');
if (dateTime) {
  let dateTimeValue = dateTime.value;
}
const output = document.querySelector('#output');

// Get the date
function getDate(target, response) {
  let xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status == 200) {
      if (target) {
        const date = new Date(this.responseText);
        const currentDate = new Date();

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
        // console.log(formatedDate);

        // Check if the date is still actual
        if (currentDate <= date) {
          target.innerText = formatedDate;
        } else {
          target.innerText = `Termin folgt demnächst`;
        }
        // Remove loader animation
        target.classList.remove('date-loader');

        target.value = this.responseText;
      }
    } else {
      console.log(this.status);
    }
  };
  xhttp.open('GET', response, true);
  xhttp.send();
}

if (dateForm) {
  dateForm.addEventListener('submit', setDate);
}
// console.log(dateTimeValue);

// Set the date
function setDate(event) {
  event.preventDefault();
  dateTimeValue = document.querySelector('#datetime').value;
  let params = `datetime=${dateTimeValue}`;

  output.innerText = `loading...`;

  let request = new XMLHttpRequest();
  request.open('POST', 'https://malyshkin.net/set-date.php', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //setting header for POST method
  request.onload = function () {
    if (this.status == 200) {
      output.innerText = `${this.responseText}`;
    } else {
      output.innerText = `There was a problem. Status ${this.status}. ${this.responseText}`;
    }
  };
  request.send(params);
}

getDate(runDate, 'https://malyshkin.net/run-date.php');
getDate(dateTime, 'https://malyshkin.net/run-date.php');
