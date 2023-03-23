let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.getElementsByClassName("color");

btn.addEventListener("click", function () {
  //get random number between 0 and 3
  let randomNumber = getRandomNumber;
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
