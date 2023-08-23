let value = document.querySelector(".h1").textContent;
console.log(value);

function add() {
  value++;
  document.querySelector(".h1").textContent = value;
  document.body.style.color = "green";

  console.log(value);
}

document.querySelector(".btn-inc").addEventListener("click", add);

function dec() {
  value--;
  document.querySelector(".h1").textContent = value;
  document.body.style.color = "red";

  console.log(value);
}

document.querySelector(".btn-dec").addEventListener("click", dec);

function reset() {
  value = 0;
  document.querySelector(".h1").textContent = value;
  document.body.style.color = "purple";

  console.log(value);
}

document.querySelector(".btn-res").addEventListener("click", reset);
