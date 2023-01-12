const times = document.querySelectorAll("input");
const form = document.querySelector("form");
const output = document.querySelector(".output");

form.addEventListener("submit", (e) => {
  let hours;
  let minutes;
  let seconds;
  let error;
  e.preventDefault();
  for (let time of times) {
    switch (time.id) {
      case "hours":
        hours = Number(time.value);
        break;
      case "minutes":
        minutes = Number(time.value);
        break;
      case "seconds":
        seconds = Number(time.value);
        break;
    }
  }
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes += 1;
    if (minutes > 59) {
      minutes = 0;
      hours += 1;
      if (hours > 23) {
        hours = 0;
      }
    }
  }
  const fullTime = `${hours}:${minutes}:${seconds}`;
  output.textContent = fullTime;
});

//users enters code
//user presses button
//intake the values of the 'input' elements
//add 1 to the seconds and then determine whether to add 1 to minutes,
////add 1 to hours, or to reset the timer.
//output it back to the time in a template literal to the '.output' element
