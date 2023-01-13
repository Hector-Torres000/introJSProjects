const farForm = document.querySelector("#farForm");
const celForm = document.querySelector("#celForm");

const farOutput = document.querySelector("#farOutput");
const celOutput = document.querySelector("#celOutput");

farForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let farTemp = farForm.children[1].value;
  const celTemp = (((farTemp - 32) * 5) / 9).toFixed(2);
  if (!farTemp) {
    farTemp = 0;
  }
  farOutput.textContent = `${farTemp}F is ${celTemp}C`;

  farForm.children[1].focus();
});

celForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const celTemp = celForm.children[1].value;
  const farTemp = (celTemp * (9 / 5) + 32).toFixed(2);
  celOutput.textContent = `${celTemp}C is ${farTemp}F`;

  celForm.children[1].focus();
});
//take in a number
//convert that number
//append to output span
