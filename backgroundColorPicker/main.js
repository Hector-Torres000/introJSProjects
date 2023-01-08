const colors = document.querySelectorAll("div[class*=color]");

const backColors = {
  1: "red",
  2: "white",
  3: "black",
  4: "gray",
};

for (let color of colors) {
  let num = color.className[5];
  color.addEventListener("click", () => {
    document.body.style.backgroundColor = backColors[num];
    if (document.body.style.backgroundColor === "black") {
      document.body.style.color = "white";
      document.querySelector(".color2").style.color = "black";
    } else {
      document.body.style.color = "black";
      document.querySelector(".color3").style.color = "white";
    }
  });
}
