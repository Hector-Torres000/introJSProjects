const userValue = document.querySelector("input");
const form = document.querySelector("form");
const showResult = document.querySelector(".showResult");

const days = {
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
  7: "sunday",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const modUserValue = userValue.value.toLowerCase();
  switch (modUserValue) {
    case days[1]:
      showResult.textContent = "Garfield's nemesis";
      break;
    case days[2]:
      showResult.textContent = "Eat, drink, and work!";
      break;
    case days[3]:
      showResult.textContent = "Adams Family";
      break;
    case days[4]:
      showResult.textContent = "Thors, Day!";
      break;
    case days[5]:
      showResult.textContent = "Fry, Day!";
      break;
    case days[6]:
      showResult.textContent = "Funday Saturday!";
      break;
    case days[7]:
      showResult.textContent = "Lazy Sunday!";
      break;
    default:
      showResult.textContent = "NOT A VALID DAY!";
  }
});
