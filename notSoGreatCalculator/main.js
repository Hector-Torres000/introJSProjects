const buttons = document.querySelectorAll("section div");
const totalSpan = document.querySelector(".showTotal");

let startingNum = 0;

function showTotal() {
  totalSpan.textContent = startingNum;
  console.log(startingNum);
}

for (let button of buttons) {
  button.addEventListener("click", () => {
    switch (button.className.slice(6)) {
      case "Reset":
        startingNum = 0;
        showTotal();
        break;
      case "Add3":
        startingNum += 3;
        showTotal();
        break;
      case "Add9":
        startingNum += 9;
        showTotal();
        break;
      case "Sub2":
        startingNum -= 2;
        showTotal();
        break;
    }
  });
}
